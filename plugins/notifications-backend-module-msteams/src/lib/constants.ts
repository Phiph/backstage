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
 * @public
 * Annotation key used to resolve a Microsoft Teams destination for notifications.
 *
 * Accepted values:
 * - A Teams channel composite in the form "teamId:channelId"
 * - A channel id (will require a default teamId configured in the processor config)
 * - A user principal name (email) which will be resolved to a user id via Microsoft Graph
 * - A user id (GUID) returned by Graph
 *
 * NOTE: For direct user messages the app must have the correct permissions and be installed
 * for the recipient. If the chat cannot be created the processor will log and skip.
 */
export const ANNOTATION_MSTEAMS_NOTIFY = 'msteams.microsoft.com/bot-notify';
