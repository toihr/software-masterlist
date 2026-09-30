---
name: Syncthing
slug: syncthing
website: https://syncthing.net
repo: https://github.com/syncthing/syncthing
description: Continuous peer-to-peer file synchronization between your own devices, no cloud required.
categories: [file-sync]
tags: [p2p, local-first]
platforms: [windows, macos, linux, docker]
license: MPL-2.0
self_hostable: true
maintained: active
relations:
  alternatives_to: [dropbox, resilio-sync, nextcloud]
  integrates_with: []
  fork_of:
privacy:
  telemetry: opt-in
  account_required: false
  data_location: local
pricing:
  model: free
  checked: 2026-09-30
  source: https://syncthing.net
  tiers: []
last_reviewed: 2026-09-30
---

## Overview
Keeps folders in sync directly between devices over LAN or the internet. Data never sits on a third-party server.

## Key Features
- Direct device-to-device sync, TLS encrypted in transit
- Works across NAT through public or self-hosted relays
- File versioning (trash can, simple, staggered, external)
- Web UI for configuration

## Limitations
- Not a backup: deletions and corruption sync too, unless versioning is configured
- The official Android app was discontinued in 2024, community forks continue it
- No iOS app from the project, only third-party clients

## Compared to Alternatives
- **Dropbox:** cloud-hosted with web access and sharing links, Syncthing has neither but keeps data on your devices.
- **Nextcloud:** a full server with web UI, sharing and groupware. Syncthing only syncs folders but needs no server.

## Resources
- [Documentation](https://docs.syncthing.net)
- [Forum](https://forum.syncthing.net)
