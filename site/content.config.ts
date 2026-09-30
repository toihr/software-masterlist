import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { buildEntrySchema } from '../lib/schema';
import { loadVocab } from '../lib/vocab';

// The entry id is taken from the `slug` frontmatter field.
const software = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './software' }),
  schema: buildEntrySchema(loadVocab()),
});

export const collections = { software };
