---
name: UltraSearch
slug: ultrasearch
website: https://www.jam-software.com/ultrasearch
repo:
description: Windows file search by JAM Software that reads the NTFS master file table, with an optional central index via SpaceObServer DataCentral.
categories: [system, files]
tags: [desktop-search, offline]
platforms: [windows]
license: proprietary
self_hostable: false
maintained: active
relations:
  alternatives_to: [everything]
  integrates_with: [spaceobserver-datacentral]
  fork_of:
privacy:
  telemetry: none
  account_required: false
  data_location: local
pricing:
  model: freemium
  checked: 2026-09-30
  source: https://customers.jam-software.de/prices.php?language=EN&article_group_id=61
  tiers:
    - name: Free
      prices: [{ amount: 0 }]
      notes: Unlimited use, reduced feature set compared to Professional
    - name: Professional
      notes: All features free for 30 days; bundles with SpaceObServer DataCentral or TreeSize are sold in the JAM Software shop
last_reviewed: 2026-09-30
---

## Overview
A file search tool for Windows from JAM Software. It reads the NTFS master file table for fast results and is aimed at individuals and administrators searching local drives and network shares.

## Key Features
- Fast search by name, size, date and attributes
- Search of network shares; Professional edition adds content search and more
- Optional central search index through SpaceObServer DataCentral, which also lets many clients query one index
- Part of the JAM Software family alongside TreeSize and SpaceObServer

## Limitations
- Windows only
- Professional features and DataCentral are commercial
- Closed source

## Compared to Alternatives
- **Everything:** free and lighter; no central index product or vendor-backed enterprise tooling comparable to DataCentral.

## Resources
- [Website](https://www.jam-software.com/ultrasearch)
- [Central search index](https://www.jam-software.com/ultrasearch/central-search-index-for-enterprises.shtml)
- [DataCentral manual](https://manuals.jam-software.com/spaceobserver/EN/DataCentral/)
