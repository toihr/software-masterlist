---
name: Open PDF Studio
slug: open-pdf-studio
website: https://open-aec.com/open-pdf-studio
repo: https://github.com/OpenAEC-Foundation/open-pdf-studio
description: Free PDF editor and annotator with measurement, takeoff, DWG/DXF import, signature validation and OCR.
categories: [pdf-tools, aec]
tags: [cad, ocr, mcp]
platforms: [windows, macos, linux, android]
license: LGPL-3.0-only
self_hostable: false
maintained: active
relations:
  alternatives_to: [bluebeam-revu, adobe-acrobat]
  integrates_with: []
  fork_of:
privacy:
  telemetry: none
  account_required: false
  data_location: local
pricing:
  model: free
  checked: 2026-11-02
  source: https://open-aec.com/open-pdf-studio
  tiers: []
last_reviewed: 2026-11-02
---

## Overview
A PDF viewer and annotator from the OpenAEC Foundation aimed at construction workflows. Besides annotation it supports measurement, quantity takeoff and CAD conversion.

## Key Features
- 20+ annotation tools including stamps, signatures and redaction
- Distance, area and count measurement with scale calibration
- DWG/DXF import as vector PDF, export back to DXF/DWG
- Signature validation, PDF compare, OCR (desktop)
- Optional local MCP server with 50+ tools

## Limitations
- OCR is not available on Android
- Virtual printer is Windows-only; Nix package is x86_64 only
- Some GPU drivers show a blank window until a workaround is applied
- Contacts external hosts for updates, symbol library and an optional OpenAEC sign-in; whether sign-in is required is not stated

## Compared to Alternatives
- **Bluebeam Revu / Adobe Acrobat:** proprietary and paid; this is free but younger.

## Resources
- [Repository](https://github.com/OpenAEC-Foundation/open-pdf-studio)
