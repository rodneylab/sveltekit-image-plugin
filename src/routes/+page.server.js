import {
  dominantColourPlaceholder,
  IMAGE_DIR,
  lowResolutionPlaceholder,
} from '$lib/utilities/image';
import { join, resolve } from 'node:path';

const __dirname = resolve();

/** @type {import('../../.svelte-kit/types/src/routes/$types').PageLoad} */
export async function load() {
  const mdModules = import.meta.glob('../content/blog/**/index.md');
  const posts = await Promise.all(
    Object.keys(mdModules).map(async (path) => {
      const slug = path.split('/').at(-2);
      const { metadata } = await mdModules[path]();
      const { datePublished, lastUpdated, postTitle, seoMetaDescription } = metadata;
      return { datePublished, lastUpdated, postTitle, seoMetaDescription, slug };
    }),
  );

  const images = ['me.jpg'];

  const dominantColourPromises = images.map((element) => {
    const source = join(__dirname, IMAGE_DIR, element);
    return dominantColourPlaceholder({ source });
  });

  const placeholderPromises = images.map((element) => {
    const source = join(__dirname, IMAGE_DIR, element);
    return lowResolutionPlaceholder({ source });
  });

  const dominantColours = await Promise.all(dominantColourPromises);
  const placeholders = await Promise.all(placeholderPromises);

  return { posts, placeholders, dominantColours };
}
