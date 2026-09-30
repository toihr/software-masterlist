---
name: KeePassXC
slug: keepassxc
website: https://keepassxc.org
repo: https://github.com/keepassxreboot/keepassxc
description: Offline password manager storing credentials in an encrypted KeePass database file.
categories: [password-manager]
tags: [offline, local-first, browser-extension]
platforms: [windows, macos, linux, cli]
license: GPL-2.0-only OR GPL-3.0-only
self_hostable: false
maintained: active
relations:
  alternatives_to: [bitwarden, keepass]
  integrates_with: [syncthing]
  fork_of:
privacy:
  telemetry: none
  account_required: false
  data_location: local
pricing:
  model: free
  checked: 2026-09-30
  source: https://keepassxc.org
  tiers: []
last_reviewed: 2026-09-30
---

## Overview
A cross-platform desktop password manager. Everything lives in one encrypted `.kdbx` file that you control.

## Key Features
- No account, no server, works fully offline
- Browser integration, TOTP, SSH agent and passkey support
- Compatible with the KeePass `.kdbx` format used by many mobile apps

## Limitations
- Desktop only, mobile needs a compatible app such as KeePassDX or Strongbox
- Syncing between devices is up to you (e.g. Syncthing or a cloud folder)
- No built-in sharing with other people

## Compared to Alternatives
- **Bitwarden:** handles sync and sharing for you but needs an account and a server.
- **KeePass:** the original Windows app. KeePassXC is a native cross-platform reimplementation.

## Resources
- [User guide](https://keepassxc.org/docs/)
