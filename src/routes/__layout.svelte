<script>
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<Header blogTitle={'SvelteKit x Sanity Blog'} />

<main style="padding: 1em">
  <slot />
</main>

<Footer />

<!-- 
use blue in light mode, use orange in dark mode
ref:
  media (prefers-color-scheme: dark)
:root {
  --text-color: #fff;
  --link-color: orange;
  --link-color-alt: yellow;
  --primary-color: orange;
  --secondary-color: black;
  --tertiary-color: #2d2d2d;
}
 -->

<!-- HACK: define a elements with vanillacss methods -->
<style>
  :global(a) {
    color: #1a4d9e;
  }
  :global(a:hover) {
    color: #1e61cd;
    border-bottom: none;
  }
</style>
