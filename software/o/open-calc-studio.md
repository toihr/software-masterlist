---
name: Open Calc Studio
slug: open-calc-studio
website: https://github.com/OpenAEC-Foundation/open-calc-studio
repo: https://github.com/OpenAEC-Foundation/open-calc-studio
description: Open-source construction cost estimating with IFC quantity takeoff, BC3, GAEB and CUF/RSX import, for desktop, browser and embedding.
categories: [construction-planning]
tags: [ifc, mcp]
platforms: [web, windows, macos, linux, docker]
license: LGPL-3.0-only
self_hostable: true
maintained: active
relations:
  alternatives_to: []
  integrates_with: [open-pdf-studio]
  fork_of:
privacy:
  telemetry: none
  account_required: false
  data_location: local
pricing:
  model: free
  checked: 2026-11-02
  source: https://github.com/OpenAEC-Foundation/open-calc-studio
  tiers: []
last_reviewed: 2026-11-02
---

## Overview
A cost estimating program for the construction sector from the OpenAEC Foundation. Estimates are hierarchical (chapters, items, norms, rates, overhead, profit) and can draw quantities from IFC models and PDF measurements.

## Key Features
- Editable grid, variants, snapshots and reports
- Native .ifcCalc format; BC3, ÖNORM A 2063, CUF/RSX and IFC import/export; GAEB, IBIS-TRAD and spreadsheet importers
- Review center for price, source and unit checks
- JavaScript SDK, iframe embedding, MCP server and headless REST service

## Limitations
- In public testing; signed releases and the first container image are still pending
- IFC comparison covers element identity and named quantities, not geometry-only changes
- Mobile browser build lacks native reporting and the IFC/PDF workspaces
- Telemetry of the desktop app is not documented

## Compared to Alternatives
- Few open-source estimating tools exist; this one targets Dutch and European exchange formats.

## Resources
- [Repository and docs](https://github.com/OpenAEC-Foundation/open-calc-studio)
