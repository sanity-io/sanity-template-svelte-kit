<script>
  import SanityImage from './SanityImage.svelte'

  export let portableText
  $: ({value} = portableText)
</script>

{#if value.asset}
  <figure>
    <SanityImage image={value} />
    {#if value.caption}
      <figcaption>{value.caption}</figcaption>
    {/if}
  </figure>
{/if}
