---
name: Y-app
slug: y-app
website: https://github.com/OpenAEC-Foundation/Y-app-ERPNext
repo: https://github.com/OpenAEC-Foundation/Y-app-ERPNext
description: "Browser workplace for ERPNext 16 with hours, projects, email, calendar, chat and documents in one interface (repo name Y-Next)."
categories: [productivity, communication]
tags: [aec, groupware]
platforms: [web]
license: MIT
self_hostable: true
relations:
  alternatives_to: []
  integrates_with: [open-cad-studio, open-planner-studio]
  fork_of:
privacy:
  telemetry: unknown
  account_required: unknown
  data_location: self-chosen
pricing:
  model: free
  checked: 2026-11-02
  source: https://github.com/OpenAEC-Foundation/Y-app-ERPNext
  tiers: []
last_reviewed: 2026-11-02
---

## Overview
An "everything app" for the OpenAEC ecosystem, installed as a Frappe app on your own ERPNext site. It uses existing ERPNext logins, so there is no separate account.

## Key Features
- Dashboard with hours, mileage, projects, tasks and agenda
- Email via ERPNext Communication records, calendar from Frappe Events, chat
- Projects, planning, timesheets, sales and purchasing, quotes, leads, HR
- Embedded apps: Calc and Writer (.xlsx/.docx), IFC Viewer, Open CAD Studio, Open Planner Studio

## Limitations
- Requires an existing Frappe 16 / ERPNext 16 bench
- Email needs a configured ERPNext Email Account
- Calc and Writer have known gaps; macros are not run
- Updates require a site backup and `bench migrate`
- No release version shown; telemetry is not documented

## Compared to Alternatives
- None documented by the project.

## Resources
- [Repository](https://github.com/OpenAEC-Foundation/Y-app-ERPNext)
