---
name: Open 3D Viewer Studio
slug: open-3d-viewer-studio
website: https://open-3d-viewer.open-aec.com
repo: https://github.com/OpenAEC-Foundation/open-3d-viewer
description: "Viewer for building models: IFC, Revit, SketchUp, Tekla, DWG/DXF and more, with measuring, sectioning and IFC export."
categories: [cad]
tags: [aec, ifc, mcp]
platforms: [web, windows, macos, linux]
license: LGPL-3.0-or-later
self_hostable: false
maintained: active
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
  source: https://github.com/OpenAEC-Foundation/open-3d-viewer
  tiers: []
last_reviewed: 2026-11-02
---

## Overview
A free 3D viewer for building models from the OpenAEC Foundation. The browser version needs WebGPU and uploads nothing.

## Key Features
- Opens IFC, Revit, SketchUp, Tekla, DWG/DXF, CityJSON, LandXML, glTF, OBJ, STL, PLY
- Measure distances and areas, cut sections, explode by storey or element
- Export to IFC 4
- MCP server for the desktop app (loopback, random token)

## Limitations
- IFC and Revit open only on the desktop; no undo
- Desktop builds link the proprietary `rvt-dll` Revit library, so they are not wholly open source
- IFC export writes triangles, not parametric geometry
- No point clouds, FBX, STEP or IGES
- Telemetry is not documented; the title bar notifies about newer OpenAEC Installer versions

## Compared to Alternatives
- None documented by the project.

## Resources
- [Repository](https://github.com/OpenAEC-Foundation/open-3d-viewer)
- [Browser version](https://open-3d-viewer.open-aec.com)
