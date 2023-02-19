<script>
  import SanityImage from './SanityImage.svelte'

  export let author
</script>

{#if author?.name}
  <a href="/authors/{author.slug.current}">
    {#if author.image}
      <span>
        <SanityImage image={author.image} maxWidth={40} loading="lazy" />
      </span>
    {/if}
    {author.name}
  </a>
{/if}

<style>
  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    vertical-align: middle;
  }
  span :global(img) {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    object-fit: cover;
    margin: 0;
  }
</style>
