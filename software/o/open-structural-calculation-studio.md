---
name: Open Structural Calculation Studio
slug: open-structural-calculation-studio
website: https://github.com/OpenAEC-Foundation/Open-Structural-Calculation-Studio
repo: https://github.com/OpenAEC-Foundation/Open-Structural-Calculation-Studio
description: "Desktop app for structural hand calculations in a CalcPAD-style language with units, reports, drawings and IFC export."
categories: [calculation]
tags: [aec, ifc]
platforms: [windows, web]
license: LGPL-3.0-only
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
  source: https://github.com/OpenAEC-Foundation/Open-Structural-Calculation-Studio
  tiers: []
last_reviewed: 2026-11-02
---

## Overview
An open application for structural engineering calculations from the OpenAEC Foundation, built on Tauri 2. Marked as in development on the OpenAEC roadmap.

## Key Features
- Live split-pane editor with preview and `.cpd` syntax highlighting; units via mathjs, formulas via KaTeX
- Calculation modules for a timber joist floor (NEN-EN 1995-1-1) and a timber or steel beam (NEN-EN 1993-1-1)
- Parametric SVG drawings, project-wide PDF export
- IFC 4x3 and IFCX export; embeddable as an npm library

## Limitations
- In development; only two calculation modules documented
- Browser preview cannot open file dialogs or save settings
- UI and documentation are in Dutch
- Desktop operating systems other than Windows are not documented
- Telemetry is not documented

## Compared to Alternatives
- None documented by the project.

## Resources
- [Repository](https://github.com/OpenAEC-Foundation/Open-Structural-Calculation-Studio)
