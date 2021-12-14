<script>
  import AuthorCard from './AuthorCard.svelte'

  export let portableText

  $: ({author} = portableText.block)
</script>

{#if author}
  <AuthorCard {author} />
{/if}
