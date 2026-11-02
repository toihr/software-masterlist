---
name: IFCCAD
slug: ifccad
website: https://open-aec.com/ifccad
repo: https://github.com/OpenAEC-Foundation/ifccad
description: "Experimental open CAD drawing format on IFCX, with Rust libraries, a browser Explorer, a CLI and DXF/DWG conversion."
categories: [cad]
tags: [aec, ifc]
platforms: [web, cli]
license: MPL-2.0
self_hostable: false
relations:
  alternatives_to: []
  integrates_with: []
  fork_of:
privacy:
  telemetry: unknown
  account_required: unknown
  data_location: local
pricing:
  model: free
  checked: 2026-11-02
  source: https://github.com/OpenAEC-Foundation/ifccad
  tiers: []
last_reviewed: 2026-11-02
---

## Overview
An open CAD drawing profile built on IFCX (formerly IFCX-CAD). It describes geometry, layers, blocks, layouts and styles as typed data and converts to and from DXF/DWG. The project calls it an experimental alpha, not a published standard.

## Key Features
- Rust implementation with validation, read/write and conversion reports
- Browser Explorer that processes files locally
- Primitives, blocks, Model/Paper layouts, viewports, hatch, all nine dimension kinds
- Encodings: JSON/IFCX and experimental CBOR, CBOR+Zstd

## Limitations
- No backward-compatibility or migration guarantee during alpha
- Splines are not captured or restored by the active converter
- Font contours, complete dimension display and evaluated hatch fill are unassessed
- Telemetry is not documented

## Compared to Alternatives
- None documented by the project.

## Resources
- [Repository](https://github.com/OpenAEC-Foundation/ifccad)
- [Website](https://open-aec.com/ifccad)
