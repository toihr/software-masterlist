---
name: Open Paint Studio
slug: open-paint-studio
website: https://github.com/OpenAEC-Foundation/open-paint-studio
repo: https://github.com/OpenAEC-Foundation/open-paint-studio
description: "Small MS Paint-style image editor with editable vector objects, a local API and an MCP server, in the browser or on desktop."
categories: [image-editing]
tags: [aec, mcp]
platforms: [web, windows, macos, linux]
license: MIT
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
  source: https://github.com/OpenAEC-Foundation/open-paint-studio
  tiers: []
last_reviewed: 2026-11-02
---

## Overview
A simple image editor from the OpenAEC Foundation for sketching and marking up images. Code is MIT; OpenAEC brand assets are CC BY-SA 4.0.

## Key Features
- Brush, fill, shapes, text, crop, resize, rotate and basic colour adjustments; 40 undo states
- Optional vector mode keeps shapes and text editable and exports SVG
- Opens PNG, JPEG, WebP, HEIC, AVIF, PSD, SVG, IFCX; exports PNG, JPEG, WebP, SVG
- Loopback-only API and MCP stdio server

## Limitations
- Raster corrections flatten the image (undo restores objects)
- Desktop installer does not start the API or MCP services
- Extra formats rely on a bundled ImageMagick WebAssembly worker
- Telemetry and account requirements are not documented

## Compared to Alternatives
- None documented by the project.

## Resources
- [Repository](https://github.com/OpenAEC-Foundation/open-paint-studio)
