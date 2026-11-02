---
name: Open BIM Validator Studio
slug: open-bim-validator-studio
website: https://github.com/OpenAEC-Foundation/OpenAEC-BIM-validator
repo: https://github.com/OpenAEC-Foundation/OpenAEC-BIM-validator
description: "Validates IFC models against IDS specs, including the Dutch NL-BIM Basis ILS and RVB BIM Norm, from a Python CLI."
categories: [cad]
tags: [aec, ifc]
platforms: [cli, docker]
license: unknown
self_hostable: true
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
  source: https://github.com/OpenAEC-Foundation/OpenAEC-BIM-validator
  tiers: []
last_reviewed: 2026-11-02
---

## Overview
An IFC validation tool by 3BM Bouwkunde, listed on the OpenAEC roadmap. The README documents a Python CLI; the web interface appears to be a mockup.

## Key Features
- Built-in NL-BIM Basis ILS v2 (12 checks) and RVB BIM Norm v1.1 (27 checks), or a custom IDS file
- Console, JSON and HTML reports; exit code reflects pass or fail
- Supports IFC2X3 and IFC4

## Limitations
- No license stated in the repository listing
- Described as browser-based with 3D results and BCF export, but the README documents only the CLI
- Two standards require two separate commands
- README is in Dutch; no releases
- Telemetry is not documented

## Compared to Alternatives
- None documented by the project.

## Resources
- [Repository](https://github.com/OpenAEC-Foundation/OpenAEC-BIM-validator)
