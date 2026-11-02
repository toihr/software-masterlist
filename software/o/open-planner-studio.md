---
name: Open Planner Studio
slug: open-planner-studio
website: https://open-aec.com/open-planner-studio/
repo: https://github.com/OpenAEC-Foundation/open-planner-studio
description: Open-source construction scheduling with critical path calculation, MS Project and Primavera P6 import, and IFC 4.3 storage.
categories: [task-management]
tags: [aec, ifc, mcp]
platforms: [web, windows, macos, linux]
license: LGPL-3.0-only
self_hostable: false
maintained: active
relations:
  alternatives_to: []
  integrates_with: []
  fork_of:
privacy:
  telemetry: unknown
  account_required: false
  data_location: unknown
pricing:
  model: free
  checked: 2026-11-02
  source: https://open-aec.com/open-planner-studio/
  tiers: []
last_reviewed: 2026-11-02
---

## Overview
A scheduling application for construction projects from the OpenAEC Foundation. It runs the Critical Path Method and saves projects in IFC 4.3. It runs in the browser or as a desktop app.

## Key Features
- Critical path and float calculation, four relationship types, eight constraint types
- Import of MS Project (.mpp, .xml) and Primavera P6 (.xer, .xml); export to MS Project XML, P6 XML and CSV
- Resource levelling, calendars, baselines, Gantt timeline
- Eleven report types with PDF export, including a DCMA 14-point check
- Optional built-in MCP server (desktop only, off by default)

## Limitations
- .mpp and .xer are read-only; P6 XML export drops baselines, deadlines, activity codes, custom fields and notes
- No cost management
- Self-described as young software; parity with P6 and MS Project is measured, not guaranteed
- Telemetry behaviour is not documented on the project page

## Compared to Alternatives
- None documented by the project.

## Resources
- [Repository](https://github.com/OpenAEC-Foundation/open-planner-studio)
- [Browser version](https://open-planner-studio.open-aec.com)
