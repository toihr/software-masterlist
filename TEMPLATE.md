---
name: Example App
slug: example-app                # lowercase-kebab-case, must match the file name
website: https://example.com
repo:                            # source repository URL, leave empty if closed source
description: One sentence, under 160 characters, saying what it does.
categories: [note-taking]        # 1–4, from vocab/categories.yml
tags: []                         # from vocab/tags.yml
platforms: [windows, macos, linux]  # from vocab/platforms.yml
license: MIT                     # SPDX expression or "proprietary"
self_hostable: false
maintained: active               # active | slow | feature-complete | abandoned | discontinued
relations:
  alternatives_to: []            # slugs, entries don't need to exist yet
  integrates_with: []
  fork_of:
privacy:
  telemetry: none                # none | opt-in | opt-out | mandatory
  account_required: false
  data_location: local           # local | self-chosen | EU | US | global
pricing:
  model: freemium                # free | freemium | one-time | subscription | usage-based | contact
  currency: EUR                  # ISO 4217, required if any price > 0
  vat_included: true
  region:                        # optional, e.g. EU when prices differ by region
  checked: 2026-01-31            # date you last checked the pricing page
  source: https://example.com/pricing
  tiers:
    - name: Free
      prices: [{ amount: 0 }]
    - name: Pro
      unit: user                 # flat | user | device | seat | site
      prices:
        - { amount: 8, period: month, billed: yearly }
        - { amount: 10, period: month, billed: monthly }
      limits: 10 projects
      notes: Anything else worth knowing
    - name: Enterprise
      notes: Price on request    # leave out `prices` for contact-sales tiers
last_reviewed: 2026-01-31
---

## Overview
What it is and who it's for, in 2–3 sentences.

## Key Features
- 

## Limitations
- 

## Compared to Alternatives
- **Other tool:** how they differ.

## Resources
- [Documentation](https://example.com/docs)
