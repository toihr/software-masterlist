# Instructions for Claude

This repo is a curated list of software. Each entry is a Markdown file with strict frontmatter.

## When asked to add software

1. Check it doesn't already exist: `ls software/*/` and grep for the name.
2. Research it on the web: official site, pricing page, repository, license, platforms. Prefer the vendor's own pages over third-party summaries.
3. Read `TEMPLATE.md`, `CONTRIBUTING.md` and the files in `vocab/`. Reuse existing categories and tags. If a new tag or category is really needed, add it to `vocab/` with a description and tell the user explicitly.
4. Write `software/<first letter>/<slug>.md` following the template exactly, with all five body sections.
5. Set `pricing.checked` and `last_reviewed` to today. Only include prices you actually found on the pricing page; if unsure, leave the tier out and say so.
6. Run `npm run validate`. Fix all errors before committing.
7. Commit with the message `Add <Name>` (or `Update <Name>: <what changed>`).

## When asked to update prices

Edit the existing tiers in place, update `pricing.checked`, and commit as `Update <Name> pricing`. Git history is the price history.

## Style

English, neutral, concise. No marketing language, no ratings.
