// Validates every entry in /software and the vocab files.
// Run locally with `npm run validate`, runs in CI on every push and PR.
// Errors fail the run, warnings are reported but pass.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { ROOT, loadVocab, checkVocab } from '../lib/vocab';
import { buildEntrySchema, BODY_SECTIONS, type Entry } from '../lib/schema';

type Level = 'error' | 'warning';
interface Problem { level: Level; file: string; message: string; line?: number }

const problems: Problem[] = [];
const report = (level: Level, file: string, message: string, line?: number) => problems.push({ level, file, message, line });

// 1. Vocab files
const vocab = loadVocab();
for (const msg of checkVocab(vocab)) report('error', `vocab/${msg.split(':')[0]}`, msg.slice(msg.indexOf(':') + 2));

// 2. Collect entry files
const softwareDir = path.join(ROOT, 'software');
const files = (fs.readdirSync(softwareDir, { recursive: true }) as string[])
  .filter((f) => f.endsWith('.md'))
  .map((f) => path.join('software', f).split(path.sep).join('/'))
  .sort();

const schema = buildEntrySchema(vocab);
const entries = new Map<string, { file: string; data: Entry }>();

/** Find the frontmatter line of a top-level key, for inline annotations. */
function lineOf(raw: string, key: string | number | undefined): number | undefined {
  if (typeof key !== 'string') return undefined;
  const idx = raw.split('\n').findIndex((l) => l.startsWith(`${key}:`));
  return idx >= 0 ? idx + 1 : undefined;
}

for (const file of files) {
  const raw = fs.readFileSync(path.join(ROOT, file), 'utf8');

  // Path rules: software/<first char>/<slug>.md or software/<first char>/<slug>/index.md
  const parts = file.split('/');
  const nameFromPath = parts.at(-1) === 'index.md' ? parts.at(-2)! : parts.at(-1)!.replace(/\.md$/, '');
  const expectedDepth = parts.at(-1) === 'index.md' ? 4 : 3;
  if (parts.length !== expectedDepth) {
    report('error', file, 'must live at software/<first letter>/<slug>.md or software/<first letter>/<slug>/index.md');
  } else if (parts[1] !== nameFromPath[0]) {
    report('error', file, `must be in folder software/${nameFromPath[0]}/, not software/${parts[1]}/`);
  }

  let parsed: matter.GrayMatterFile<string>;
  try {
    parsed = matter(raw);
  } catch (e) {
    report('error', file, `frontmatter is not valid YAML: ${(e as Error).message}`);
    continue;
  }

  const result = schema.safeParse(parsed.data);
  if (!result.success) {
    for (const issue of result.error.issues) {
      const where = issue.path.length ? issue.path.join('.') : '(frontmatter)';
      const key = issue.path[0] ?? ('keys' in issue ? (issue.keys as string[])[0] : undefined);
      report('error', file, `${where}: ${issue.message}`, lineOf(raw, key as string));
    }
    continue;
  }
  const data = result.data;

  if (data.slug !== nameFromPath) report('error', file, `slug "${data.slug}" must match the file name "${nameFromPath}"`, lineOf(raw, 'slug'));
  if (entries.has(data.slug)) report('error', file, `duplicate slug, already used by ${entries.get(data.slug)!.file}`);
  entries.set(data.slug, { file, data });

  // Body structure
  const headings = [...parsed.content.matchAll(/^##\s+(.+?)\s*$/gm)].map((m) => m[1]);
  const missing = BODY_SECTIONS.filter((s) => !headings.includes(s));
  if (missing.length) report('warning', file, `missing body sections: ${missing.join(', ')}`);

  if (data.pricing.checked > new Date()) report('error', file, 'pricing.checked is in the future', lineOf(raw, 'pricing'));
  if (data.last_reviewed > new Date()) report('error', file, 'last_reviewed is in the future', lineOf(raw, 'last_reviewed'));
}

// 3. Cross-entry checks
const wanted = new Map<string, string[]>(); // referenced slugs without an entry yet
for (const [slug, { file, data }] of entries) {
  const { alternatives_to, integrates_with, fork_of } = data.relations;
  for (const [field, list] of [['alternatives_to', alternatives_to], ['integrates_with', integrates_with], ['fork_of', fork_of ? [fork_of] : []]] as const) {
    for (const target of list) {
      if (target === slug) report('error', file, `relations.${field} points to itself`);
      // Unknown targets are allowed (the entry may not exist yet), the site shows them unlinked.
      else if (!entries.has(target)) wanted.set(target, [...(wanted.get(target) ?? []), slug]);
    }
  }
}

// 4. Output
const gha = process.env.GITHUB_ACTIONS === 'true';
const esc = (s: string) => s.replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
for (const p of problems) {
  if (gha) console.log(`::${p.level} file=${p.file}${p.line ? `,line=${p.line}` : ''}::${esc(p.message)}`);
  else console.log(`${p.level === 'error' ? '✖' : '⚠'} ${p.file}${p.line ? `:${p.line}` : ''}  ${p.message}`);
}
if (wanted.size) {
  const list = [...wanted].sort().map(([t, from]) => `${t} (${from.join(', ')})`).join(', ');
  const msg = `Referenced but no entry yet (${wanted.size}): ${list}`;
  console.log(gha ? `::notice title=Missing entries::${esc(msg)}` : `\nℹ ${msg}`);
}
const errors = problems.filter((p) => p.level === 'error').length;
const warnings = problems.length - errors;
console.log(`\n${files.length} entries checked, ${errors} error(s), ${warnings} warning(s)`);
process.exit(errors ? 1 : 0);
