---
name: Open BIM Studio
slug: open-bim-studio
website: https://github.com/OpenAEC-Foundation/open-bim-studio
repo: https://github.com/OpenAEC-Foundation/open-bim-studio
description: "Open-source desktop BIM modeller for building systems, reinforcement and steel connections with plans, sections and schedules."
categories: [cad]
tags: [aec, ifc, mcp]
platforms: [linux]
license: MPL-2.0
self_hostable: false
relations:
  alternatives_to: []
  integrates_with: []
  fork_of:
privacy:
  telemetry: unknown
  account_required: false
  data_location: local
pricing:
  model: free
  checked: 2026-11-02
  source: https://github.com/OpenAEC-Foundation/open-bim-studio
  tiers: []
last_reviewed: 2026-11-02
---

## Overview
A BIM modeller from the OpenAEC Foundation, built on the DynLex runtime. Projects are stored as IFCX. It is a development preview.

## Key Features
- Walls, floors, roofs, columns, beams, piles, reinforcement and steel connections (plates, bolts, welds)
- Plans, elevations, schedules and sheets from one model; PDF and SVG output
- IFCX native format, IFC import/export, DXF and DWG (R2000)
- Local API and MCP adapter

## Limitations
- Development preview (0.1.1); file formats may change between previews
- Linux x86-64 only; needs glibc 2.38+, X11/XWayland and Vulkan; no Windows release yet, no macOS
- DXF entity coverage is incomplete; unsupported IFC elements stay read-only
- Large models are slow; full builds can need about 10 GB RAM
- Telemetry is not documented

## Compared to Alternatives
- None documented by the project.

## Resources
- [Repository](https://github.com/OpenAEC-Foundation/open-bim-studio)
