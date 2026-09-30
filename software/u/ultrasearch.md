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
  currency: EUR
  checked: 2026-09-30
  source: https://www.jam-software.com/ultrasearch
  tiers:
    - name: Free
      prices: [{ amount: 0 }]
      notes: Home users only, non-commercial use; Professional features free for 30 days
    - name: Professional
      unit: user
      prices:
        - { amount: 24, period: year, billed: yearly }
      notes: Listed as "from" price; VAT treatment not stated on the page
    - name: Professional with DataCentral
      notes: Listed as "from 360 EUR" (1x UltraSearch per user plus 1x DataCentral per site); billing period not stated on the page
last_reviewed: 2026-09-30
---

## Overview
A file search tool for Windows from JAM Software. It reads the NTFS master file table for fast results and is aimed at individuals and administrators searching local drives and network shares.

## Key Features
- Search as you type by file name, plus content search with snippets and a preview pane with highlighted matches
- Filters by file type, age and size; regex and search syntax; list and thumbnail views; over 250 metadata columns in Professional
- Professional adds network shares, SharePoint, Google Drive, ZIP search, Windows Server support and bulk move, archive and rename
- Optional central index through SpaceObServer DataCentral (on-premises Windows service, metadata in SQL Server, full-text index on disk); UltraSearch detects an existing index automatically

## Limitations
- Windows only
- Free edition is licensed for non-commercial home use only
- Without DataCentral, content search reads files one by one; JAM Software suggests this for fewer than 50 users
- DataCentral needs Windows 10 or Server 2016+, 8 GB RAM, 4 CPU cores and a Microsoft SQL Server (Express or Standard runtime)
- Closed source

## Compared to Alternatives
- **Everything:** free and lighter, focused on file names; UltraSearch adds content search, business network sources and a central index.

## Resources
- [Website](https://www.jam-software.com/ultrasearch)
- [Central search index](https://www.jam-software.com/ultrasearch/central-search-index-for-enterprises.shtml)
- [DataCentral manual](https://manuals.jam-software.com/spaceobserver/EN/DataCentral/)
