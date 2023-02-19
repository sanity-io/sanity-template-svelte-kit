<script>
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<Header blogTitle={'SvelteKit x Sanity Blog'} />

<main style="padding: 1em">
  <slot />
</main>

<Footer />

<style>
  /* this template uses VanillaCSS: https://vanillacss.com/ */
  /* you can use the values below to create your own theme colors  */

  /* Default Variables */
  :root {
    --desktop-font-size: 1.2rem/1.5;
    --mobile-font-size: 1rem/1.4;
    --text-color: #2d2d2d;
    --link-color: darkblue;
    --link-color-alt: #1d5dc1;
    --primary-color: lightsteelblue;
    --secondary-color: aliceblue;
    --tertiary-color: whitesmoke;
  }
  /* Linked Header Colors */
  :global(h1 a, h1 a:visited, h2 a, h2 a:visited, h3 a, h3 a:visited) {
    color: var(--text-color);
  }
  :global(h1 a:hover, h1 a:focus, h2 a:hover, h2 a:focus, h3 a:hover, h3 a:focus) {
    color: var(--link-color-alt);
  }
  /* Dark Mode Variables */
  @media (prefers-color-scheme: dark) {
    :root {
      --text-color: #fff;
      --link-color: #206ee9;
      --link-color-alt: #1d5dc1;
      --primary-color: darkblue;
      --secondary-color: black;
      --tertiary-color: #121923;
    }
    :global(body) {
      background: #121923;
    }
  }
</style>
