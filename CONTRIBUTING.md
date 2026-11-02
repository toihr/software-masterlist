# Contributing

## Add an entry

1. Copy `TEMPLATE.md` to `software/<first letter>/<slug>.md`, e.g. `software/s/syncthing.md`.
   If the entry needs images, use a folder instead: `software/s/syncthing/index.md`.
2. Fill in the frontmatter. The comments in the template list all allowed values.
3. Write the five body sections: Overview, Key Features, Limitations, Compared to Alternatives, Resources.
4. Run `npm run validate` and fix what it reports.
5. Open a pull request.

## Writing style

- English, neutral, factual. Opinions go into Limitations as concrete facts ("no iOS app"), not ratings.
- `description` is one sentence under 160 characters.
- Keep entries short. Link to the vendor's docs rather than copying them.

## Unknown facts

Never guess. If the vendor doesn't document `license`, `telemetry`, `account_required` or `data_location`, set it to `unknown`. Leave `maintained` out unless you can back it up (e.g. recent releases), and only add relations the vendor states or you have verified.

## Pricing

- Copy prices from the vendor's own pricing page and set `pricing.checked` to the day you looked.
- One tier per plan. If a plan has monthly and yearly billing, add both to its `prices` list.
- `period` is what the amount covers (`month`, `year`, `once`). `billed` is how often you pay.
  "$4/month billed yearly" is `{ amount: 4, period: month, billed: yearly }`.
- `unit` says what the price is per: `flat`, `user`, `device`, `seat` or `site`.
- Contact-sales plans have no `prices`, just a `notes` line.
- Set `vat_included` to match what the page shows. Use `region` when a vendor prices regions differently.
- Price history is the git history of the file, so update prices in place.

## Categories and tags

Both are controlled vocabularies in `vocab/`. Validation fails on unknown values and suggests the closest match.

- **Category = what the software is or does** (its function): `password-manager`, `file-sync`, `cad`, `pdf-tools`. Ask "what kind of tool is this?". Pick broad ones that many entries could share.
- **Tag = a trait or context**: an industry or domain (`aec`, `geotechnical`), a format (`ifc`, `markdown`), or a property (`local-first`, `mcp`, `ocr`). Ask "what else is notable about it?".
- Industry or domain names are tags, not categories. If a category would hold only one or two entries, it is probably a tag.

- **Categories** are few and stable. A new one needs a short reason in the PR description. Children set `parent`; only one level of nesting.
- **Tags** can be added freely, as long as no existing tag already covers it.
- Add new values in the same PR as the entry that uses them, with a `description`, and `aliases` for common synonyms.

## Relations

`alternatives_to`, `integrates_with` and `fork_of` use slugs. Targets don't have to exist yet; the validator lists them as "referenced but no entry yet", which doubles as a to-do list. Backlinks are generated automatically, so only add a relation on one side.

## Local development

```sh
npm install
npm run validate   # check entries
npm run dev        # site at http://localhost:4321
npm run build      # production build into dist/
```
