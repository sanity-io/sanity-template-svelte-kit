<script>
  import AuthorCard from '$lib/AuthorCard.svelte'
  import PostsGrid from '$lib/PostsGrid.svelte'

  /** @type {import('./$types').PageData} */
  export let data
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<PostsGrid posts={data.posts} />

<h2 style="margin-top: 4rem">Author{data.authors.length > 1 ? 's' : ''}</h2>

{#each data.authors as author}
  <AuthorCard {author} />
{/each}
