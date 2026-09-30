// Client-side search and faceted filtering for the index page.
// Rows are server-rendered; this script only hides, reorders and highlights them.
import Fuse, { type FuseResultMatch } from 'fuse.js';

type FacetKey = 'category' | 'platform' | 'pricing' | 'license' | 'hosting' | 'tag';
interface Item {
  slug: string;
  name: string;
  description: string;
  alternatives: string[];
  facets: Record<FacetKey, string[]>;
}

// "or": match any selected value. "and": match all selected values.
const FACETS: Record<FacetKey, 'or' | 'and'> = {
  category: 'or',
  platform: 'and',
  pricing: 'or',
  license: 'or',
  hosting: 'or',
  tag: 'and',
};
const KEYS = Object.keys(FACETS) as FacetKey[];

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

function highlight(text: string, match?: FuseResultMatch) {
  if (!match) return escapeHtml(text);
  let out = '';
  let last = 0;
  for (const [start, end] of match.indices) {
    if (end - start < 1) continue; // skip single characters
    out += escapeHtml(text.slice(last, start)) + '<mark>' + escapeHtml(text.slice(start, end + 1)) + '</mark>';
    last = end + 1;
  }
  return out + escapeHtml(text.slice(last));
}

export function initBrowse() {
  const items: Item[] = JSON.parse(document.getElementById('entries-data')!.textContent!);
  const input = document.getElementById('q') as HTMLInputElement;
  const form = document.getElementById('facets') as HTMLFormElement;
  const list = document.getElementById('rows')!;
  const empty = document.getElementById('empty')!;
  const count = document.getElementById('results-count')!;
  const clear = document.getElementById('clear')!;
  const filters = document.getElementById('filters') as HTMLDetailsElement;

  const rows = new Map<string, HTMLElement>();
  for (const el of list.querySelectorAll<HTMLElement>('.row')) rows.set(el.dataset.slug!, el);

  const fuse = new Fuse(items, {
    keys: [
      { name: 'name', weight: 3 },
      { name: 'description', weight: 1.5 },
      { name: 'alternatives', weight: 1.5 },
      { name: 'facets.tag', weight: 1 },
      { name: 'facets.category', weight: 1 },
    ],
    threshold: 0.34,
    ignoreLocation: true,
    includeMatches: true,
    minMatchCharLength: 2,
  });

  const selected = (): Record<FacetKey, Set<string>> => {
    const sel = Object.fromEntries(KEYS.map((k) => [k, new Set<string>()])) as Record<FacetKey, Set<string>>;
    for (const box of form.querySelectorAll<HTMLInputElement>('input:checked')) sel[box.name as FacetKey].add(box.value);
    return sel;
  };

  const matches = (item: Item, key: FacetKey, values: Set<string>) => {
    if (!values.size) return true;
    const have = item.facets[key];
    return FACETS[key] === 'or' ? [...values].some((v) => have.includes(v)) : [...values].every((v) => have.includes(v));
  };

  function update(syncUrl = true) {
    const q = input.value.trim();
    const sel = selected();
    const results = q ? fuse.search(q) : items.map((item) => ({ item, matches: undefined }));
    const base = results.map((r) => r.item);

    const visible = results.filter((r) => KEYS.every((k) => matches(r.item, k, sel[k])));

    // Show, order and highlight rows
    for (const el of rows.values()) el.hidden = true;
    for (const { item, matches: m } of visible) {
      const el = rows.get(item.slug)!;
      el.hidden = false;
      list.appendChild(el);
      el.querySelector('[data-field="name"]')!.innerHTML = highlight(item.name, m?.find((x) => x.key === 'name'));
      el.querySelector('[data-field="description"]')!.innerHTML = highlight(item.description, m?.find((x) => x.key === 'description'));
    }

    // Facet counts: how many results you would get by also ticking this value
    for (const span of form.querySelectorAll<HTMLElement>('[data-count]')) {
      const [key, value] = span.dataset.count!.split(':') as [FacetKey, string];
      const trial = new Set(FACETS[key] === 'or' ? [value] : [...sel[key], value]);
      const n = base.filter((item) => KEYS.every((k) => matches(item, k, k === key ? trial : sel[k]))).length;
      span.textContent = String(n);
      const label = span.closest('label')!;
      const box = label.querySelector('input')!;
      label.classList.toggle('is-empty', n === 0 && !box.checked);
      box.disabled = n === 0 && !box.checked;
    }

    const nFilters = KEYS.reduce((n, k) => n + sel[k].size, 0);
    filters.querySelector('summary')!.textContent = nFilters ? `Filters (${nFilters} active)` : 'Filters';
    const active = q !== '' || KEYS.some((k) => sel[k].size);
    count.textContent = active ? `${visible.length} of ${items.length} tools` : `${items.length} tools`;
    empty.hidden = visible.length > 0;
    clear.hidden = !active;

    if (syncUrl) {
      const params = new URLSearchParams();
      if (q) params.set('q', q);
      for (const k of KEYS) if (sel[k].size) params.set(k, [...sel[k]].join(','));
      const qs = params.toString();
      history.replaceState(null, '', qs ? `?${qs}` : location.pathname);
    }
  }

  // Restore state from the URL
  const params = new URLSearchParams(location.search);
  input.value = params.get('q') ?? '';
  for (const k of KEYS) {
    for (const v of params.get(k)?.split(',') ?? []) {
      const box = form.querySelector<HTMLInputElement>(`input[name="${k}"][value="${CSS.escape(v)}"]`);
      if (box) box.checked = true;
    }
  }

  if (matchMedia('(min-width: 901px)').matches) filters.open = true;

  let timer: number | undefined;
  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = window.setTimeout(update, 80);
  });
  form.addEventListener('change', () => update());
  clear.addEventListener('click', () => {
    input.value = '';
    for (const box of form.querySelectorAll<HTMLInputElement>('input:checked')) box.checked = false;
    update();
    input.focus();
  });
  document.addEventListener('keydown', (e) => {
    const typing = e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement;
    if (e.key === '/' && !typing) {
      e.preventDefault();
      input.focus();
      input.select();
    } else if (e.key === 'Escape' && e.target === input) {
      input.value = '';
      update();
    }
  });

  update(false);
}
