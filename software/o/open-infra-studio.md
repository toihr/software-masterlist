---
name: Open Infra Studio
slug: open-infra-studio
website: https://github.com/OpenAEC-Foundation/Open-Infra-Studio
repo: https://github.com/OpenAEC-Foundation/Open-Infra-Studio
description: "GIS and civil design plugin for Open CAD Studio: terrain, alignments, profiles, Dutch base maps and IFC 4.3 export."
categories: [cad]
tags: [aec, ifc, mcp]
platforms: [windows, linux]
license: GPL-3.0-only
self_hostable: false
relations:
  alternatives_to: []
  integrates_with: [open-cad-studio]
  fork_of:
privacy:
  telemetry: unknown
  account_required: unknown
  data_location: unknown
pricing:
  model: free
  checked: 2026-11-02
  source: https://github.com/OpenAEC-Foundation/Open-Infra-Studio
  tiers: []
last_reviewed: 2026-11-02
---

## Overview
A plugin that adds GIS and civil engineering design to Open CAD Studio drawings. Releases must be updated together with the CAD application.

## Key Features
- GIS workbench for any coordinate system with aerial photos, WMS/WFS/XYZ layers and OpenStreetMap data
- Survey points, LandXML, terrain (TIN, contours), alignments, profiles, cross sections, corridors
- CityGML and CityJSON import, IFC 4.3 export
- Dutch sources: BGT, cadastre, KLIC, AHN, 3D BAG, BRO; NLCS drawing standards
- MCP server with 39 tools

## Limitations
- Workbench window not yet available on macOS
- No export to LandXML, GeoJSON, Shapefile or GeoPackage; no IFC import
- JPEG 2000, E57 and PLY are recognised but cannot be read
- Sentinel-2 imagery is non-commercial (CC BY-NC-SA 4.0)
- Telemetry is not documented

## Compared to Alternatives
- None documented by the project.

## Resources
- [Repository](https://github.com/OpenAEC-Foundation/Open-Infra-Studio)
