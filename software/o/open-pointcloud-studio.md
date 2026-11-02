---
name: Open Pointcloud Studio
slug: open-pointcloud-studio
website: https://github.com/OpenAEC-Foundation/open-pointcloud-studio
repo: https://github.com/OpenAEC-Foundation/open-pointcloud-studio
description: Rust desktop app for viewing, measuring, editing and converting laser scans, with section drawings and mesh export.
categories: [cad]
tags: [aec, point-clouds, ifc, mcp]
platforms: [windows, macos, linux, cli]
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
  source: https://github.com/OpenAEC-Foundation/open-pointcloud-studio
  tiers: []
last_reviewed: 2026-11-02
---

## Overview
A desktop point cloud tool from the OpenAEC Foundation, written in Rust. It handles survey-grade scans and can produce section drawings, meshes and detected flat faces.

## Key Features
- Opens LAS, LAZ, E57, PLY, PCD, PTX, PTS and text clouds, plus OBJ, PLY, OFF, STL and DXF
- Section box, colour modes, distance and area measurement, BCF export
- Section drawings and plans as DXF/DWG and PDF sheets
- Mesh and face detection with export to OBJ, PLY, STL, DXF, DWG and IFC4
- CLI modes, MCP server, C library and extension system

## Limitations
- DWG files cannot be opened; PCD, PTX and DXF are not all writable
- Section drawing and meshing were tested on generated rooms, not real scans
- Windows build may be unsigned; macOS build is not notarised
- Linux ARM64 is experimental; needs glibc 2.35+
- Telemetry is not documented

## Compared to Alternatives
- None documented by the project.

## Resources
- [Repository](https://github.com/OpenAEC-Foundation/open-pointcloud-studio)
