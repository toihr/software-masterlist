---
name: Nextcloud
slug: nextcloud
website: https://nextcloud.com
repo: https://github.com/nextcloud/server
description: Self-hosted cloud for files, calendar, contacts, office documents and chat.
categories: [cloud-storage, file-sync]
tags: [groupware, collaboration, plugins]
platforms: [web, windows, macos, linux, ios, android, docker]
license: AGPL-3.0-or-later
self_hostable: true
maintained: active
relations:
  alternatives_to: [google-drive, dropbox]
  integrates_with: []
  fork_of: owncloud
privacy:
  telemetry: opt-in
  account_required: true
  data_location: self-chosen
pricing:
  model: freemium
  checked: 2026-09-30
  source: https://nextcloud.com/pricing/
  tiers:
    - name: Community
      prices: [{ amount: 0 }]
      notes: Full server, self-hosted, community support.
    - name: Enterprise
      unit: user
      notes: Support subscription with long-term maintenance, price on request.
last_reviewed: 2026-09-30
---

## Overview
A self-hosted replacement for Google Workspace or Dropbox. The core is file sync and sharing, and apps add calendar, contacts, office editing, video calls and more.

## Key Features
- Desktop and mobile sync clients
- Sharing with links, passwords and expiry dates
- App store with calendar, contacts, Talk, office suite integrations
- Server-side and end-to-end encryption options

## Limitations
- Needs ongoing maintenance: updates, backups, PHP and database tuning
- Performance depends heavily on setup
- Quality of third-party apps varies

## Compared to Alternatives
- **Google Drive:** zero maintenance but your data is on Google's servers.
- **Syncthing:** simpler and serverless, but no web access, sharing or groupware.

## Resources
- [Admin manual](https://docs.nextcloud.com)
- [All-in-One installer](https://github.com/nextcloud/all-in-one)
