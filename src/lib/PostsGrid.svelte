<script>
  import PostCard from '$lib/PostCard.svelte'

  export let posts = []
</script>

<section>
  {#each posts as post (post.slug.current)}
    <PostCard {post} />
  {/each}
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem 2rem;
    margin-top: 3rem;
  }
</style>
