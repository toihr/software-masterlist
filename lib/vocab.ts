// Loads and checks the controlled vocabularies in /vocab.
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

export interface VocabItem {
  description?: string;
  aliases?: string[];
  parent?: string;
}
export type VocabMap = Record<string, VocabItem>;
export interface Vocab {
  categories: VocabMap;
  tags: VocabMap;
  platforms: VocabMap;
}
export type VocabKind = keyof Vocab;

export const ROOT = process.cwd();

export function loadVocab(root = ROOT): Vocab {
  const read = (name: string): VocabMap =>
    YAML.parse(fs.readFileSync(path.join(root, 'vocab', `${name}.yml`), 'utf8')) ?? {};
  return { categories: read('categories'), tags: read('tags'), platforms: read('platforms') };
}

/** Structural problems inside the vocab files themselves. */
export function checkVocab(vocab: Vocab): string[] {
  const errors: string[] = [];
  const keyRe = /^[a-z0-9]+(-[a-z0-9]+)*$/;
  for (const kind of Object.keys(vocab) as VocabKind[]) {
    const map = vocab[kind];
    const seen = new Map<string, string>();
    for (const [key, item] of Object.entries(map)) {
      if (!keyRe.test(key)) errors.push(`${kind}.yml: "${key}" must be lowercase-kebab-case`);
      if (item?.parent !== undefined) {
        if (kind !== 'categories') errors.push(`${kind}.yml: "${key}" has a parent, only categories can`);
        else if (!map[item.parent]) errors.push(`categories.yml: "${key}" has unknown parent "${item.parent}"`);
        else if (map[item.parent]?.parent) errors.push(`categories.yml: "${key}" nests too deep, parents must be top-level`);
      }
      for (const alias of item?.aliases ?? []) {
        if (map[alias]) errors.push(`${kind}.yml: alias "${alias}" of "${key}" is also a key`);
        if (seen.has(alias)) errors.push(`${kind}.yml: alias "${alias}" used by both "${seen.get(alias)}" and "${key}"`);
        seen.set(alias, key);
      }
    }
  }
  return errors;
}

function distance(a: string, b: string): number {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return dp[a.length][b.length];
}

/** Best guess for an unknown value: alias match first, then closest spelling. */
export function suggest(value: string, map: VocabMap): string | undefined {
  for (const [key, item] of Object.entries(map)) if (item?.aliases?.includes(value)) return key;
  let best: string | undefined;
  let bestD = Infinity;
  for (const key of Object.keys(map)) {
    const d = distance(value, key);
    if (d < bestD) [best, bestD] = [key, d];
  }
  return bestD <= Math.max(2, Math.floor(value.length / 4)) ? best : undefined;
}

export function unknownMessage(kind: VocabKind, value: string, map: VocabMap): string {
  const hint = suggest(value, map);
  const noun = { categories: 'category', tags: 'tag', platforms: 'platform' }[kind];
  return hint
    ? `unknown ${noun} "${value}", did you mean "${hint}"?`
    : `unknown ${noun} "${value}", add it to vocab/${kind}.yml if it's genuinely new`;
}
