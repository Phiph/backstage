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

import { NotificationPayload } from '@backstage/plugin-notifications-common';

/**
 * Adaptive Card payload builder. We keep this intentionally small and self contained so that
 * users that want to deeply customise can fork/replace easily.
 * @public
 */
export function toAdaptiveCard(payload: NotificationPayload) {
  const { title, description, link, severity, topic } = payload;

  const facts = [
    severity && { title: 'Severity', value: severity },
    topic && { title: 'Topic', value: topic },
  ].filter(Boolean) as { title: string; value: string }[];

  return {
    type: 'message',
    attachments: [
      {
        contentType: 'application/vnd.microsoft.card.adaptive',
        content: {
          type: 'AdaptiveCard',
          version: '1.5',
            $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
          body: [
            {
              type: 'TextBlock',
              size: 'Large',
              weight: 'Bolder',
              text: title,
              wrap: true,
            },
            description && {
              type: 'TextBlock',
              text: description,
              wrap: true,
              spacing: 'Medium',
            },
            facts.length > 0 && {
              type: 'FactSet',
              facts,
            },
          ].filter(Boolean),
          actions: link
            ? [
                {
                  type: 'Action.OpenUrl',
                  title: 'Open',
                  url: link,
                },
              ]
            : [],
        },
      },
    ],
  };
}

/** Basic throttling helper */
export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Simple expiry map for the data loader, which only expects a map that implements set, get, and delete and clear
export class ExpiryMap<K, V> extends Map<K, V> {
  #ttlMs: number;
  #timestamps: Map<K, number> = new Map();

  constructor(ttlMs: number) {
    super();
    this.#ttlMs = ttlMs;
  }

  set(key: K, value: V) {
    const result = super.set(key, value);
    this.#timestamps.set(key, Date.now());
    return result;
  }

  get(key: K) {
    if (!this.has(key)) {
      return undefined;
    }
    const timestamp = this.#timestamps.get(key)!;
    if (Date.now() - timestamp > this.#ttlMs) {
      this.delete(key);
      return undefined;
    }
    return super.get(key);
  }

  delete(key: K) {
    this.#timestamps.delete(key);
    return super.delete(key);
  }

  clear() {
    this.#timestamps.clear();
    return super.clear();
  }
}
