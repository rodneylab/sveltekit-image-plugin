<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch, params, url }) {
    try {
      const { pathname } = url;
      const { slug } = params;
      const res = await fetch(`${pathname}.json`);

      if (res.ok) {
        const imageData = await import(`../../lib/generated/posts/${pathname.slice(1)}.js`);

        return {
          props: {
            ...(await res.json()),
            slug,
            imageData: { ...imageData.default },
            page: (await import(`../../content/blog/${slug}/index.md`)).default,
          },
        };
      }

      return {};
    } catch (error) {
      const { pathname } = url;
      console.error(`Error in load function for path: ${pathname}`);
    }
  }
</script>

<script>
  import lazyload from 'vanilla-lazyload';
  import { browser } from '$app/env';

  import '$lib/styles/normalise.css';
  import '$lib/styles/index.scss';
  import BlogPost from '$lib/components/BlogPost.svelte';
  export let page, post, imageData;

  if (browser && !document.lazyloadInstance) {
    document.lazyloadInstance = new lazyload();
  }
</script>

<BlogPost {post} {imageData} />
<svelte:component this={page} />
