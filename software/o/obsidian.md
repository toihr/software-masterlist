---
name: Obsidian
slug: obsidian
website: https://obsidian.md
repo:
description: Local-first Markdown knowledge base with backlinks, graph view and a large plugin ecosystem.
categories: [note-taking]
tags: [markdown, local-first, plugins, knowledge-graph]
platforms: [windows, macos, linux, ios, android]
license: proprietary
self_hostable: false
maintained: active
relations:
  alternatives_to: [logseq, notion]
  integrates_with: []
  fork_of:
privacy:
  telemetry: none
  account_required: false
  data_location: local
pricing:
  model: freemium
  currency: USD
  vat_included: false
  checked: 2026-09-30
  source: https://obsidian.md/pricing
  tiers:
    - name: Personal
      prices: [{ amount: 0 }]
      notes: Full app, free for personal and (since 2025) commercial use.
    - name: Sync Standard
      unit: user
      prices:
        - { amount: 4, period: month, billed: yearly }
        - { amount: 5, period: month, billed: monthly }
      limits: 1 synced vault, 1 GB
    - name: Sync Plus
      unit: user
      prices:
        - { amount: 8, period: month, billed: yearly }
        - { amount: 10, period: month, billed: monthly }
      limits: 10 synced vaults, 10 GB
    - name: Publish
      unit: site
      prices:
        - { amount: 8, period: month, billed: yearly }
        - { amount: 10, period: month, billed: monthly }
    - name: Catalyst
      prices: [{ amount: 25, period: once }]
      notes: Supporter license with early access to insider builds.
    - name: Commercial license
      unit: user
      prices: [{ amount: 50, period: year }]
      notes: Optional since February 2025.
last_reviewed: 2026-09-30
---

## Overview
A note-taking app that works on a folder of plain Markdown files on your disk. Aimed at people who want to own their notes and link them into a personal knowledge base.

## Key Features
- Notes are plain `.md` files, readable by any other editor
- Backlinks, graph view, canvas and embedded queries
- Thousands of community plugins and themes
- Optional end-to-end encrypted Sync and hosted Publish

## Limitations
- Closed source, although the data format is open
- Real-time collaboration is limited compared to Notion
- Plugin quality varies and plugins run with full access to the vault

## Compared to Alternatives
- **Logseq:** open source and outline-first, where Obsidian is page-first with a much larger plugin ecosystem.
- **Notion:** cloud database and team workspace, Obsidian is local files and single-user first.

## Resources
- [Help docs](https://help.obsidian.md)
- [Community plugins](https://obsidian.md/plugins)
