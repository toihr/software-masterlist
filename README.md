# Software Masterlist

A searchable list of software with structured metadata and real pricing, kept as Markdown files in git.

- **Entries:** `software/<first letter>/<slug>.md`, one file per tool
- **Vocabulary:** `vocab/` holds the allowed categories, tags and platforms
- **Schema:** `lib/schema.ts` is shared by the validator and the website
- **Website:** Astro site in `site/`, deployed to GitHub Pages

## Quick start

```sh
npm install
npm run validate
npm run dev
```

## Setup on GitHub

1. Push the repo to GitHub.
2. **Settings → Pages → Source:** select "GitHub Actions".
3. **Settings → Branches:** add a rule for `main` that requires the `validate` check to pass.

The site then deploys on every push to `main`.

See [CONTRIBUTING.md](CONTRIBUTING.md) for how entries, pricing and vocabulary work.

## License

Code: MIT. Entries in `software/` and `vocab/`: CC BY-SA 4.0.
