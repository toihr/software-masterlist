---
name: Paperless-ngx
slug: paperless-ngx
website: https://docs.paperless-ngx.com
repo: https://github.com/paperless-ngx/paperless-ngx
description: Self-hosted document archive that OCRs scans and makes them searchable and auto-tagged.
categories: [document-management]
tags: [ocr, machine-learning]
platforms: [web, docker]
license: GPL-3.0-only
self_hostable: true
maintained: active
relations:
  alternatives_to: []
  integrates_with: [nextcloud]
  fork_of: paperless-ng
privacy:
  telemetry: none
  account_required: true
  data_location: self-chosen
pricing:
  model: free
  checked: 2026-09-30
  source: https://docs.paperless-ngx.com
  tiers: []
last_reviewed: 2026-09-30
---

## Overview
Turns paper and PDF documents into a searchable archive. Drop scans into a folder or send them by mail, and Paperless-ngx OCRs, tags and files them.

## Key Features
- OCR in many languages, output as searchable PDF/A
- Automatic matching of tags, correspondents and document types
- Consumption from folders, email and the mobile apps
- Full-text search and saved views

## Limitations
- Requires self-hosting, usually via Docker
- Auto-tagging needs a few manually tagged documents to learn from
- Originals are stored as files, but the database is needed to keep the metadata

## Compared to Alternatives
- **Paperless-ng:** the abandoned project this is a community fork of.

## Resources
- [Documentation](https://docs.paperless-ngx.com)
