import { getCollection, type CollectionEntry } from 'astro:content';
import { loadVocab } from '../lib/vocab';
import { isOpenSource } from '../lib/license';

export type SoftwareEntry = CollectionEntry<'software'>;
export type Pricing = SoftwareEntry['data']['pricing'];
type Tier = Pricing['tiers'][number];
type Price = NonNullable<Tier['prices']>[number];

export const vocab = loadVocab();

export async function getEntries() {
  const entries = await getCollection('software');
  return entries.sort((a, b) => a.data.name.localeCompare(b.data.name, 'en', { sensitivity: 'base' }));
}

/** Prefix a site path with the configured base. */
export function href(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export const entryHref = (slug: string) => href(`software/${slug}/`);

export function titleFromSlug(slug: string) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export function money(amount: number, currency = 'USD') {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency,
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

const PERIOD_SHORT = { month: '/mo', year: '/yr', once: ' once' } as const;
const UNIT_LABEL = { flat: '', user: 'per user', device: 'per device', seat: 'per seat', site: 'per site' } as const;
export const unitLabel = (u: Tier['unit']) => UNIT_LABEL[u];

export function formatPrice(p: Price, currency?: string) {
  if (p.amount === 0) return 'Free';
  const base = `${money(p.amount, currency)}${p.period ? PERIOD_SHORT[p.period] : ''}`;
  return p.billed ? `${base}, billed ${p.billed}` : base;
}

/** Short label for lists, e.g. "Free", "Free, paid from $4/mo", "$25 once". */
export function priceSummary(pricing: Pricing): string {
  const paid = pricing.tiers.flatMap((t) => t.prices ?? []).filter((p) => p.amount > 0);
  const hasFree = pricing.model === 'free' || pricing.tiers.some((t) => t.prices?.some((p) => p.amount === 0));
  const onRequest = pricing.tiers.some((t) => !t.prices);
  if (!paid.length) {
    if (hasFree) return onRequest ? 'Free, paid plans on request' : 'Free';
    return 'Price on request';
  }
  const monthly = (p: Price) => (p.period === 'year' ? p.amount / 12 : p.period === 'once' ? Infinity : p.amount);
  const recurring = paid.filter((p) => p.period !== 'once');
  const cheapest = (recurring.length ? recurring : paid).reduce((a, b) => (monthly(b) < monthly(a) ? b : a));
  const label = `${money(cheapest.amount, pricing.currency)}${PERIOD_SHORT[cheapest.period!]}`;
  return hasFree ? `Free, paid from ${label}` : `From ${label}`;
}

export const PRICING_LABEL: Record<Pricing['model'], string> = {
  free: 'Free',
  freemium: 'Freemium',
  'one-time': 'One-time purchase',
  subscription: 'Subscription',
  'usage-based': 'Usage-based',
  contact: 'Price on request',
};

export const licenseKind = (license: string) => (isOpenSource(license) ? 'open-source' : 'proprietary');

export function platformLabel(p: string) {
  const labels: Record<string, string> = { windows: 'Windows', macos: 'macOS', linux: 'Linux', ios: 'iOS', android: 'Android', web: 'Web', cli: 'CLI', docker: 'Docker' };
  return labels[p] ?? titleFromSlug(p);
}

export const categoryLabel = (c: string) => titleFromSlug(c);

/** Top-level categories with their children, in vocab file order. */
export function categoryTree() {
  const cats = vocab.categories;
  return Object.keys(cats)
    .filter((k) => !cats[k]?.parent)
    .map((k) => ({ key: k, children: Object.keys(cats).filter((c) => cats[c]?.parent === k) }));
}

export function parentsOf(categories: string[]) {
  return [...new Set(categories.map((c) => vocab.categories[c]?.parent).filter(Boolean) as string[])];
}

/** Entries that point at `slug` through a relation field. */
export function backlinks(all: SoftwareEntry[], slug: string, field: 'alternatives_to' | 'integrates_with' | 'fork_of') {
  return all.filter((e) => {
    const v = e.data.relations[field];
    return Array.isArray(v) ? v.includes(slug) : v === slug;
  });
}

export function formatDate(d: Date) {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
}
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
