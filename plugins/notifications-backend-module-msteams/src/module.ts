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
import {
  coreServices,
  createBackendModule,
} from '@backstage/backend-plugin-api';
import { notificationsProcessingExtensionPoint } from '@backstage/plugin-notifications-node';
import { MsTeamsNotificationProcessor } from './lib/MsTeamsNotificationProcessor';
import { catalogServiceRef } from '@backstage/plugin-catalog-node';

/**
 * Slack & Microsoft Teams notification processors for use with the notifications plugin.
 *
 * @public
 */
export const notificationsModuleMsTeams = createBackendModule({
  pluginId: 'notifications',
  moduleId: 'msteams',
  register(reg) {
    reg.registerInit({
      deps: {
        auth: coreServices.auth,
        config: coreServices.rootConfig,
        logger: coreServices.logger,
        catalog: catalogServiceRef,
        notifications: notificationsProcessingExtensionPoint,
      },
      async init({ auth, config, logger, catalog, notifications }) {
        notifications.addProcessor(
          MsTeamsNotificationProcessor.fromConfig(config, {
            auth,
            logger,
            catalog,
          }),
        );
      },
    });
  },
});
