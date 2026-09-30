---
name: Bitwarden
slug: bitwarden
website: https://bitwarden.com
repo: https://github.com/bitwarden
description: Open-source, end-to-end encrypted password manager with cloud or self-hosted sync.
categories: [password-manager]
tags: [e2ee, browser-extension]
platforms: [web, windows, macos, linux, ios, android, cli, docker]
license: GPL-3.0-only
self_hostable: true
maintained: active
relations:
  alternatives_to: [1password, lastpass, keepassxc]
  integrates_with: []
  fork_of:
privacy:
  telemetry: none
  account_required: true
  data_location: US
pricing:
  model: freemium
  currency: USD
  vat_included: false
  checked: 2026-09-30
  source: https://bitwarden.com/pricing/
  tiers:
    - name: Free
      prices: [{ amount: 0 }]
      limits: Unlimited passwords and devices
    - name: Premium
      prices: [{ amount: 19.80, period: year, billed: yearly }]
      notes: Price doubled from $10/year in January 2026.
    - name: Families
      prices: [{ amount: 47.88, period: year, billed: yearly }]
      limits: Up to 6 users
    - name: Teams
      unit: user
      prices: [{ amount: 4, period: month, billed: yearly }]
    - name: Enterprise
      unit: user
      prices: [{ amount: 6, period: month, billed: yearly }]
last_reviewed: 2026-09-30
---

## Overview
A password manager that syncs an encrypted vault across all devices. Works for individuals, families and companies.

## Key Features
- Apps for every major platform plus browser extensions and CLI
- Generous free tier with unlimited devices
- Password sharing through organizations
- Self-hosting with the official Docker setup

## Limitations
- Clients are GPL-3.0, the server is AGPL-3.0 with some enterprise parts under a separate Bitwarden license
- Cloud hosting defaults to the US region, an EU region is available at signup
- Premium features on a self-hosted server still require a paid license

## Compared to Alternatives
- **1Password:** more polished apps, no free tier, no self-hosting.
- **KeePassXC:** fully offline with no account, but syncing is up to you.

## Resources
- [Help center](https://bitwarden.com/help/)
- [Self-hosting guide](https://bitwarden.com/help/self-host-bitwarden/)
