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
export interface Config {
  notifications?: {
    processors?: {
      slack?: Array<{
        /**
         * Slack Bot Token. Usually starts with `xoxb-`.
         * @visibility secret
         */
        token?: string;
        /**
         * Broadcast notification receivers when receiver is set to config
         * These can be Slack User IDs, Slack User Email addresses, Slack Channel
         * Names, or Slack Channel IDs. Any valid identifier that chat.postMessage can accept.
         */
        broadcastChannels?: string[];
      }>;
      msteams?: Array<{
        /**
         * Bot access token (Bearer) for Microsoft Graph on behalf of the Teams app.
         * Typically acquired via client credentials.
         * @visibility secret
         */
        token: string;
        /** Optional default team id used when annotations only specify a channel id */
        defaultTeamId?: string;
        /** Broadcast channel descriptors teamId:channelId */
        broadcastChannels?: string[];
        /** Throttling configuration */
        throttle?: {
          /** Max messages per interval (default 20) */
          limit?: number;
          /** Interval in ms (default 60000) */
          intervalMs?: number;
        };
      }>;
    };
  };
}
