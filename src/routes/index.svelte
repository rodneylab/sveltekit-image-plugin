<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    const url = './index-endpoint.json';
    const postsPromise = fetch(url);
    const placeholdersPromise = fetch('/api/image-placeholders.json', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        images: ['me.jpg'],
      }),
    });

    const [postsResponse, placeholdersResponse] = await Promise.all([
      postsPromise,
      placeholdersPromise,
    ]);

    if (postsResponse.ok && placeholdersResponse.ok) {
      return {
        props: { ...(await postsResponse.json()), ...(await placeholdersResponse.json()) },
      };
    }

    return {};
  }
</script>

<script>
  import { browser } from '$app/env';
  import ogSquareImageSrc from '$lib/assets/home/home-open-graph-square.jpg';
  import ogImageSrc from '$lib/assets/home/home-open-graph.jpg';
  import twitterImageSrc from '$lib/assets/home/home-twitter.jpg';
  import featuredImageSrc from '$lib/assets/home/home.jpg';
  import meImageSrcsetWebp from '$lib/assets/me.jpg?width=1344;672;336&format=webp&srcset';
  import meImageSrcset from '$lib/assets/me.jpg?width=1344;672;336&srcset';
  import meImage from '$lib/assets/me.jpg?width=672';
  import BlogRoll from '$lib/components/BlogRoll.svelte';
  import Card from '$lib/components/Card.svelte';
  import SEO from '$lib/components/SEO/index.svelte';
  import website from '$lib/config/website';
  import { onMount } from 'svelte';

  export let dominantColours;
  /* uncommment if using low reoslution placeholders instead of dominant colour blocks */
  // export let placeholders;
  export let posts;

  onMount(() => {
    if (browser) {
      document.lazyloadInstance.update();
    }
  });

  const { author, siteUrl } = website;

  let title = 'Home';
  const breadcrumbs = [
    {
      name: 'Home',
      slug: '',
    },
  ];
  let metadescription =
    'SvelteKit MDsvex Blog Starter - starter code by Rodney Lab to help you get going on your next blog site';
  const featuredImageAlt =
    'picture of a person with long, curly hair, wearing a red had taking a picture with an analogue camera';
  const featuredImage = {
    url: featuredImageSrc,
    alt: featuredImageAlt,
    width: 672,
    height: 448,
    caption: 'Home page',
  };
  const ogImage = {
    url: ogImageSrc,
    alt: featuredImageAlt,
  };
  const ogSquareImage = {
    url: ogSquareImageSrc,
    alt: featuredImageAlt,
  };

  const twitterImage = {
    url: twitterImageSrc,
    alt: featuredImageAlt,
  };
  const entityMeta = {
    url: `${siteUrl}/`,
    faviconWidth: 512,
    faviconHeight: 512,
    caption: author,
  };
  const seoProps = {
    title,
    slug: '',
    entityMeta,
    datePublished: '2021-07-07T14:19:33.000+0100',
    lastUpdated: '2021-07-07T14:19:33.000+0100',
    breadcrumbs,
    metadescription,
    featuredImage,
    ogImage,
    ogSquareImage,
    twitterImage,
  };
  const sizes = '(max-width: 672px) calc(100vw - 32px), 672px';
</script>

<SEO {...seoProps} />
<header>
  <h1>Climate &mdash; Sveltekit Starter</h1>
  <h2>SvelteKit MDsveX (Markdown for Svelte) Blog</h2>
</header>
<picture>
  <source
    data-sizes={sizes}
    data-srcset={meImageSrcsetWebp}
    type="image/webp"
    width="672"
    height="448"
  />
  <source
    data-sizes={sizes}
    data-srcset={meImageSrcset}
    type="image/jpeg"
    width="672"
    height="448"
  />
  <img
    class="lazy"
    alt={featuredImageAlt}
    loading="eager"
    decoding="async"
    width="672"
    height="448"
    data-src={meImage}
    src={dominantColours[0]}
  />
</picture>
<Card>
  <h2><span>About me</span></h2>
  <p>
    I live and breathe analogue photography. I show you my favourite analogue film cameras on this
    site. Hopefully if you are not into analogue photography yet, some of my enthusiasm will rub off
    onto you.
  </p>
</Card>
<BlogRoll {posts} />

<style lang="scss">
  header > h2 {
    font-size: $font-size-3;
  }

  img {
    border-radius: $spacing-1;
    margin: $spacing-6 $spacing-0 $spacing-12;
    max-width: 100%;
    height: auto;
  }
</style>
