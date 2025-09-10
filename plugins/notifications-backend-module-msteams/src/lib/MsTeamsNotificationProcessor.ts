/*
 * Copyright 2025 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This processor sends Backstage notifications to Microsoft Teams either to a channel
 * or directly to a user (1:1 chat) using the Microsoft Graph APIs.
 *
 * Minimal permissions required for the Azure AD application (delegated OR application):
 * - Chat.Create, Chat.ReadWrite
 * - ChannelMessage.Send (for channel posts)
 * - User.Read.All (resolving user principal names)
 *
 * The processor supports entity annotations via `msteams.microsoft.com/bot-notify` in the
 * formats described in `constants.ts`.
 */

import { AuthService, LoggerService } from '@backstage/backend-plugin-api';
import {
  Entity,
  isUserEntity,
  parseEntityRef,
  UserEntity,
} from '@backstage/catalog-model';
import { Config } from '@backstage/config';
import { NotFoundError } from '@backstage/errors';
import { Notification } from '@backstage/plugin-notifications-common';
import {
  NotificationProcessor,
  NotificationSendOptions,
} from '@backstage/plugin-notifications-node';
import { durationToMilliseconds } from '@backstage/types';
import { Counter, metrics } from '@opentelemetry/api';
import DataLoader from 'dataloader';
import { CatalogService } from '@backstage/plugin-catalog-node';
import {
  ANNOTATION_MSTEAMS_NOTIFY,
} from './constants';
import { toAdaptiveCard, delay, ExpiryMap } from './util';
import { Client } from '@microsoft/microsoft-graph-client';
import 'isomorphic-fetch';

type GraphClient = {
  post: (url: string, body: any) => Promise<any>;
  get: (url: string) => Promise<any>;
};

export class MsTeamsNotificationProcessor implements NotificationProcessor {
  private readonly logger: LoggerService;
  private readonly catalog: CatalogService;
  private readonly auth: AuthService;
  private readonly graph: GraphClient;
  private readonly messagesSent: Counter;
  private readonly messagesFailed: Counter;
  private readonly broadcastChannels?: string[]; // list of channel descriptors teamId:channelId
  private readonly defaultTeamId?: string; // optional default team for short channel ids
  private readonly entityLoader: DataLoader<string, Entity | undefined>;
  private readonly throttleIntervalMs: number;
  private readonly throttleLimit: number;

  static fromConfig(
    config: Config,
    options: {
      auth: AuthService;
      logger: LoggerService;
      catalog: CatalogService;
    },
  ): MsTeamsNotificationProcessor[] {
    const teamsConfig =
      config.getOptionalConfigArray('notifications.processors.msteams') ?? [];
    return teamsConfig.map(c => {
      const broadcastChannels = c.getOptionalStringArray('broadcastChannels');
      const defaultTeamId = c.getOptionalString('defaultTeamId');
      const throttleLimit = c.getOptionalNumber('throttle.limit') ?? 20;
      const throttleIntervalMs = c.getOptionalNumber('throttle.intervalMs') ??
        durationToMilliseconds({ minutes: 1 });
      const token = c.getString('token');
      const graphClient: GraphClient = createGraphClient(token);
      return new MsTeamsNotificationProcessor({
        broadcastChannels,
        defaultTeamId,
        throttleLimit,
        throttleIntervalMs,
        graphClient,
        ...options,
      });
    });
  }

  private constructor(options: {
    graphClient: GraphClient;
    auth: AuthService;
    logger: LoggerService;
    catalog: CatalogService;
    broadcastChannels?: string[];
    defaultTeamId?: string;
    throttleLimit?: number;
    throttleIntervalMs?: number;
  }) {
    const {
      auth,
      catalog,
      logger,
      graphClient,
      broadcastChannels,
      defaultTeamId,
      throttleLimit = 20,
      throttleIntervalMs = durationToMilliseconds({ minutes: 1 }),
    } = options;
    this.logger = logger;
    this.catalog = catalog;
    this.auth = auth;
  this.graph = graphClient;
    this.broadcastChannels = broadcastChannels;
    this.defaultTeamId = defaultTeamId;
    this.throttleLimit = throttleLimit;
    this.throttleIntervalMs = throttleIntervalMs;

    this.entityLoader = new DataLoader<string, Entity | undefined>(
      async entityRefs => {
        return await this.catalog
          .getEntitiesByRefs(
            {
              entityRefs: entityRefs.slice(),
              fields: [
                `kind`,
                `spec.profile.email`,
                `metadata.annotations.${ANNOTATION_MSTEAMS_NOTIFY}`,
              ],
            },
            { credentials: await this.auth.getOwnServiceCredentials() },
          )
          .then(r => r.items);
      },
      {
        name: 'MsTeamsNotificationProcessor.entityLoader',
        cacheMap: new ExpiryMap(durationToMilliseconds({ minutes: 10 })),
        maxBatchSize: 100,
        batchScheduleFn: cb =>
          setTimeout(cb, durationToMilliseconds({ milliseconds: 10 })),
      },
    );

    const meter = metrics.getMeter('default');
    this.messagesSent = meter.createCounter(
      'notifications.processors.msteams.sent.count',
      { description: 'Number of messages sent to Microsoft Teams successfully' },
    );
    this.messagesFailed = meter.createCounter(
      'notifications.processors.msteams.error.count',
      { description: 'Number of messages that failed to send to Microsoft Teams' },
    );
  }

  getName(): string {
    return 'MsTeamsNotificationProcessor';
  }

  async processOptions(
    options: NotificationSendOptions,
  ): Promise<NotificationSendOptions> {
    if (options.recipients.type !== 'entity') {
      return options;
    }

    const entityRefs = [options.recipients.entityRef].flat();
    const outbound: Array<() => Promise<void>> = [];

    await Promise.all(
      entityRefs.map(async entityRef => {
        const compound = parseEntityRef(entityRef);
        if (compound.kind === 'user') {
          return; // user messages handled in postProcess for DM logic
        }
        let destination: ChannelDescriptor | undefined;
        try {
          const target = await this.getTeamsNotificationTarget(entityRef);
          if (target?.type === 'channel') {
            destination = target;
          }
        } catch (e) {
          this.logger.error(
            `Failed to resolve Teams channel for ${entityRef}: ${(e as Error).message}`,
          );
          return;
        }
        if (!destination) {
          this.logger.debug(
            `No Teams channel annotation found for entity ${entityRef}`,
          );
          return;
        }

        const body = toAdaptiveCard(options.payload);
        outbound.push(() =>
          this.postChannelMessage(destination!.teamId, destination!.channelId, body),
        );
      }),
    );

    await this.dispatch(outbound);
    return options;
  }

  async postProcess(
    notification: Notification,
    options: NotificationSendOptions,
  ): Promise<void> {
    const outbound: Array<() => Promise<void>> = [];

    if (notification.user === null) {
      // broadcast
      for (const c of this.broadcastChannels ?? []) {
        const parsed = this.parseChannelDescriptor(c);
        if (!parsed) continue;
        outbound.push(() =>
          this.postChannelMessage(parsed.teamId, parsed.channelId, toAdaptiveCard(options.payload)),
        );
      }
    } else if (options.recipients.type === 'entity') {
      const entityRefs = [options.recipients.entityRef].flat();
      if (entityRefs.some(e => parseEntityRef(e).kind === 'group')) {
        return; // group already sent in processOptions
      }
      try {
        const target = await this.getTeamsNotificationTarget(notification.user);
        if (target?.type === 'user') {
          const formatted = await this.formatPayload(options.payload);
          outbound.push(() => this.postUserMessage(target.userId, toAdaptiveCard(formatted)));
        }
      } catch (e) {
        this.logger.warn(`Failed to resolve Teams user for ${notification.user}: ${(e as Error).message}`);
      }
    }

    await this.dispatch(outbound);
  }

  private async formatPayload(payload: Notification['payload']) {
    // Placeholder for user ref replacement logic (similar to Slack) if needed.
    return payload;
  }

  private async dispatch(tasks: Array<() => Promise<void>>) {
    if (tasks.length === 0) return;
    const interval = this.throttleIntervalMs / this.throttleLimit;
    let success = 0;
    let failure = 0;
    for (const t of tasks) {
      try {
        await t();
        success++;
      } catch (e) {
        failure++;
        this.logger.error(`Failed to send Teams notification: ${(e as Error).message}`);
      }
      await delay(interval);
    }
    this.messagesSent.add(success);
    this.messagesFailed.add(failure);
  }

  async getTeamsNotificationTarget(
    entityRef: string,
  ): Promise<Destination | undefined> {
    const entity = await this.entityLoader.load(entityRef);
    if (!entity) throw new NotFoundError(`Entity not found: ${entityRef}`);
    const annotation =
      entity.metadata?.annotations?.[ANNOTATION_MSTEAMS_NOTIFY];
    if (annotation) {
      // prefer explicit teams annotation
      const channel = this.parseChannelDescriptor(annotation);
      if (channel) return channel;
      // assume user principal name / email
      return await this.resolveUser(annotation, entity);
    }
     
    if (isUserEntity(entity)) {
      // try by email if user
      return await this.resolveUser(entity.spec?.profile?.email, entity);
    }
    return undefined;
  }

  private parseChannelDescriptor(value: string | undefined): ChannelDescriptor | undefined {
    if (!value) return undefined;
    // Accept formats: teamId:channelId OR just channelId (if defaultTeamId configured)
    if (value.includes(':')) {
      const [teamId, channelId] = value.split(':', 2);
      if (teamId && channelId) return { type: 'channel', teamId, channelId };
      return undefined;
    }
    if (this.defaultTeamId) {
      return { type: 'channel', teamId: this.defaultTeamId, channelId: value };
    }
    return undefined;
  }

  private async resolveUser(
    principal: string | undefined,
    entity: Entity,
  ): Promise<UserDestination | undefined> {
    if (!principal) return undefined;
    try {
      // Resolve via Graph: /users/{userPrincipalName}
      const user = await this.graph.get(`/users/${encodeURIComponent(principal)}`);
      if (user?.id) {
        return { type: 'user', userId: user.id };
      }
      return undefined;
    } catch (e) {
      this.logger.debug(
        `Failed to resolve user '${principal}' for entity ${entity.metadata?.name}: ${(e as Error).message}`,
      );
      return undefined;
    }
  }

  private async postChannelMessage(teamId: string, channelId: string, body: any) {
    // Graph endpoint: POST /teams/{team-id}/channels/{channel-id}/messages
    await this.graph.post(`/teams/${teamId}/channels/${channelId}/messages`, body);
  }

  private async postUserMessage(userId: string, body: any) {
    // Create / reuse a 1:1 chat, then send message
    // 1. Create chat (idempotent pattern: attempt create, could cache future)
    // POST /chats with members
    const chat = await this.graph.post(`/chats`, {
      chatType: 'oneOnOne',
      members: [
        {
          '@odata.type': '#microsoft.graph.aadUserConversationMember',
          roles: ['owner'],
          userId,
        },
      ],
    });
    if (!chat?.id) throw new Error('Failed to create 1:1 chat');
    await this.graph.post(`/chats/${chat.id}/messages`, body);
  }
}

// Destination types
type ChannelDescriptor = { type: 'channel'; teamId: string; channelId: string };
type UserDestination = { type: 'user'; userId: string };
type Destination = ChannelDescriptor | UserDestination;

function createGraphClient(token: string): GraphClient {
  const raw = Client.init({
    authProvider: done => {
      done(null, token);
    },
  });
  return {
    get: async (url: string) => raw.api(url).get(),
    post: async (url: string, body: any) => raw.api(url).post(body),
  } as GraphClient;
}
