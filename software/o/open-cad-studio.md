---
name: Open CAD Studio
slug: open-cad-studio
website: https://www.opencadstudio.com
repo: https://github.com/HakanSeven12/OpenCADStudio
description: "Open-source 2D drafting and 3D modelling in Rust with native DWG and DXF read and write, on desktop and in the browser."
categories: [cad]
tags: [aec]
platforms: [windows, macos, linux, web]
license: GPL-3.0-only
self_hostable: false
maintained: active
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
  source: https://github.com/HakanSeven12/OpenCADStudio
  tiers: []
last_reviewed: 2026-11-02
---

## Overview
A CAD application written in Rust, started as a community project by Hakan Seven and listed in the OpenAEC roadmap. It reads and writes DWG and DXF natively without a conversion service.

## Key Features
- 2D drafting with layers, blocks, hatches, dimensions, paper space and plot styles
- 3D solid modelling: extrude, revolve, sweep, loft, Boolean operations
- Desktop apps and a browser app; 23 interface languages
- Desktop-only: PDF output, system printing, external plugins, command scripts, headless automation

## Limitations
- Still in development; the README advises keeping backups of important drawings
- macOS app is ad-hoc signed, not notarized, so Gatekeeper may block first launch
- Snap is not in the Snap Store and does not self-update
- Browser version has no native plugins, PDF output or system printing
- Telemetry is not documented

## Compared to Alternatives
- None documented by the project.

## Resources
- [Repository](https://github.com/HakanSeven12/OpenCADStudio)
- [Website](https://www.opencadstudio.com)
