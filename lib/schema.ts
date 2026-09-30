// Single source of truth for entry frontmatter.
// Used by scripts/validate.ts (CI) and by the Astro content collection (build).
import { z } from 'astro/zod';
import { type Vocab, type VocabKind, unknownMessage } from './vocab';
import { parseLicense } from './license';

export const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

export const MAINTAINED = ['active', 'slow', 'feature-complete', 'abandoned', 'discontinued'] as const;
export const TELEMETRY = ['none', 'opt-in', 'opt-out', 'mandatory'] as const;
export const DATA_LOCATION = ['local', 'self-chosen', 'EU', 'US', 'global'] as const;
export const PRICING_MODEL = ['free', 'freemium', 'one-time', 'subscription', 'usage-based', 'contact'] as const;
export const PRICE_UNIT = ['flat', 'user', 'device', 'seat', 'site'] as const;
export const PERIOD = ['month', 'year', 'once'] as const;
export const BILLED = ['monthly', 'yearly'] as const;

const slug = z.string().regex(SLUG, 'must be lowercase-kebab-case');
const optionalUrl = z.url().nullish().transform((v) => v ?? undefined);

const price = z
  .strictObject({
    amount: z.number().nonnegative(),
    period: z.enum(PERIOD).optional(),
    billed: z.enum(BILLED).optional(),
  })
  .superRefine((p, ctx) => {
    if (p.amount > 0 && !p.period) ctx.addIssue({ code: 'custom', message: 'period is required when amount > 0' });
    if (p.period === 'once' && p.billed) ctx.addIssue({ code: 'custom', message: 'billed makes no sense for period "once"' });
  });

const tier = z.strictObject({
  name: z.string().min(1),
  unit: z.enum(PRICE_UNIT).default('flat'),
  prices: z.array(price).min(1).optional(), // omit for "contact sales"
  limits: z.string().optional(),
  notes: z.string().optional(),
});

const pricing = z
  .strictObject({
    model: z.enum(PRICING_MODEL),
    currency: z.string().regex(/^[A-Z]{3}$/, 'must be an ISO 4217 code like EUR or USD').optional(),
    vat_included: z.boolean().default(false),
    region: z.string().optional(),
    checked: z.coerce.date(),
    source: optionalUrl,
    tiers: z.array(tier).default([]),
  })
  .superRefine((p, ctx) => {
    const paid = p.tiers.some((t) => t.prices?.some((pr) => pr.amount > 0));
    if (paid && !p.currency) ctx.addIssue({ code: 'custom', path: ['currency'], message: 'currency is required when a tier has a price' });
    if (paid && !p.source) ctx.addIssue({ code: 'custom', path: ['source'], message: 'source (pricing page URL) is required when a tier has a price' });
    if (!['free', 'contact'].includes(p.model) && p.tiers.length === 0)
      ctx.addIssue({ code: 'custom', path: ['tiers'], message: `model "${p.model}" needs at least one tier` });
  });

export function buildEntrySchema(vocab: Vocab) {
  const term = (kind: VocabKind) =>
    z.string().superRefine((v, ctx) => {
      if (!vocab[kind][v]) ctx.addIssue({ code: 'custom', message: unknownMessage(kind, v, vocab[kind]) });
    });
  const unique = <T extends z.ZodType>(item: T) =>
    z.array(item).refine((a) => new Set(a as unknown[]).size === a.length, 'contains duplicates');

  return z.strictObject({
    name: z.string().min(1),
    slug,
    website: z.url(),
    repo: optionalUrl,
    description: z.string().min(10).max(160, 'keep it under 160 characters, details go in the body'),
    categories: unique(term('categories')).min(1).max(4),
    tags: unique(term('tags')).default([]),
    platforms: unique(term('platforms')).min(1),
    license: z.string().refine((v) => parseLicense(v) !== null, 'must be an SPDX expression (e.g. "MIT", "GPL-2.0-only OR GPL-3.0-only") or "proprietary"'),
    self_hostable: z.boolean(),
    maintained: z.enum(MAINTAINED).nullish().transform((v) => v ?? undefined),
    relations: z
      .strictObject({
        alternatives_to: unique(slug).default([]),
        integrates_with: unique(slug).default([]),
        fork_of: slug.nullish().transform((v) => v ?? undefined),
      })
      .prefault({}),
    privacy: z.strictObject({
      telemetry: z.enum(TELEMETRY),
      account_required: z.boolean(),
      data_location: z.enum(DATA_LOCATION),
    }),
    pricing,
    last_reviewed: z.coerce.date(),
  });
}

export type Entry = z.output<ReturnType<typeof buildEntrySchema>>;

/** Body sections every entry should have, in order. Missing ones are warnings. */
export const BODY_SECTIONS = ['Overview', 'Key Features', 'Limitations', 'Compared to Alternatives', 'Resources'];
