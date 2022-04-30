<script>
  import AuthorCard from './AuthorCard.svelte'

  export let portableText

  $: ({author} = portableText.value)
</script>

{#if author}
  <AuthorCard {author} />
{/if}
