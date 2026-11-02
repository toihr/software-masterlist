---
name: Open Geotechniek Studio
slug: open-geotechniek-studio
website: https://github.com/OpenAEC-Foundation/open-geotechniek-studio
repo: https://github.com/OpenAEC-Foundation/open-geotechniek-studio
description: "Desktop app for Dutch geotechnical work: view CPT (GEF, BRO-XML) and borehole data, map them and draw site situations."
categories: [calculation, cad]
tags: [aec, geotechnical]
platforms: [windows, linux]
license: MIT
self_hostable: false
relations:
  alternatives_to: []
  integrates_with: []
  fork_of:
privacy:
  telemetry: unknown
  account_required: unknown
  data_location: unknown
pricing:
  model: free
  checked: 2026-11-02
  source: https://github.com/OpenAEC-Foundation/open-geotechniek-studio
  tiers: []
last_reviewed: 2026-11-02
---

## Overview
A tool from the OpenAEC Foundation for working with cone penetration tests and boreholes in the Netherlands. It combines CPT plots, a BRO map and a situation drawing on one CAD sheet.

## Key Features
- Reads GEF 1.x and BRO-XML CPT files, plots qc, fs, Rf, u2 with Robertson 1990 classification
- BRO-XML boreholes with NEN 5104 soil layers
- Map with PDOK layers, BAG buildings, cadastral boundaries and BRO data
- A2/A3 situation drawing, PDF/CSV/GeoJSON export, GEF export
- Single-layer settlement worksheet

## Limitations
- Only the single-layer settlement calculation is available; other modules are not enabled
- The qc/Rf chart is indicative, not a normalized classification
- No macOS download listed
- Telemetry is not documented
- Dutch data sources only

## Compared to Alternatives
- None documented by the project.

## Resources
- [Repository](https://github.com/OpenAEC-Foundation/open-geotechniek-studio)
