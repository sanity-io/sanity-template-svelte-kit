<script>
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<Header blogTitle={'SvelteKit x Sanity Blog'}/>
<main>
  <slot/>
</main>
<Footer />

<style>
  main {
    padding: 0 2rem;
  }

  :global(body) {
    margin: 0;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    margin: 0 0 0.5em 0;
    font-weight: 400;
    line-height: 1.2;
  }

  :global(h1) {
    font-size: 2em;
  }

  :global(a) {
    color: inherit;
  }

  @media (min-width: 400px) {
    :global(body) {
      font-size: 16px;
    }
  }
</style>