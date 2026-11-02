---
name: Open Pile Plan Studio
slug: open-pile-plan-studio
website: https://open-aec.com/open-pile-plan-studio
repo: https://github.com/OpenAEC-Foundation/pile-plan-studio
description: Open-source tool to compare pile options and optimise a pile plan for structural load points using CPT data.
categories: [calculation]
tags: [aec, geotechnical, mcp]
platforms: [web, windows]
license: LGPL-3.0-or-later
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
  source: https://open-aec.com/open-pile-plan-studio
  tiers: []
last_reviewed: 2026-11-02
---

## Overview
An alpha-stage engineering app from the OpenAEC Foundation. It combines load points, CPTs and foundation advice to propose pile assignments by utilisation and cost. The Rust core runs in the browser (WebAssembly) and on Windows.

## Key Features
- Compression and optional tension checks per load point
- Automatic CPT selection with manual override
- Import from CSV/XLSX, including an RFEM export profile
- Cost optimisation with the HiGHS solver; named plan variants
- IFCPP project files, Excel/CSV export, revision change tables
- Optional local MCP bridge (Windows)

## Limitations
- Public alpha; results must be verified by a qualified engineer
- CPT selection rules are configurable approximations
- Strict import column order; some layouts are rejected
- Browser demo has no MCP endpoint
- No macOS or Linux build listed
- Development is AI-assisted with human review

## Compared to Alternatives
- None documented by the project.

## Resources
- [Repository](https://github.com/OpenAEC-Foundation/pile-plan-studio)
- [Browser demo](https://pile-plan-studio.open-aec.com)
