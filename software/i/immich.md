---
name: Immich
slug: immich
website: https://immich.app
repo: https://github.com/immich-app/immich
description: Self-hosted photo and video backup with face recognition, search and a Google Photos-like UI.
categories: [photo-management, backup]
tags: [machine-learning]
platforms: [web, ios, android, docker]
license: AGPL-3.0-only
self_hostable: true
maintained: active
relations:
  alternatives_to: [google-photos, photoprism]
  integrates_with: []
  fork_of:
privacy:
  telemetry: none
  account_required: true
  data_location: self-chosen
pricing:
  model: free
  checked: 2026-09-30
  source: https://immich.app
  tiers: []
last_reviewed: 2026-09-30
---

## Overview
Backs up photos and videos from your phone to your own server and gives you a timeline, albums, maps and sharing.

## Key Features
- Automatic mobile backup
- Face recognition and semantic search, running locally
- Shared albums, partner sharing and map view
- External libraries for existing photo folders

## Limitations
- Needs a server with enough CPU/RAM for the machine-learning container
- Immich itself is not a backup of your server, you still need one
- Optional supporter purchase exists, but all features are free

## Compared to Alternatives
- **Google Photos:** no maintenance, but your photos are stored and analyzed by Google.
- **PhotoPrism:** stronger on organizing existing archives, Immich is stronger on mobile backup.

## Resources
- [Documentation](https://immich.app/docs)
