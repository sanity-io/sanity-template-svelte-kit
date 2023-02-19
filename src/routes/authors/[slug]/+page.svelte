<script>
  import Code from '$lib/Code.svelte'
  import Link from '$lib/Link.svelte'
  import ImageBlock from '$lib/ImageBlock.svelte'
  import AuthorBlock from '$lib/AuthorBlock.svelte'
  import PostsGrid from '$lib/PostsGrid.svelte'
  import SanityImage from '$lib/SanityImage.svelte'
  import {toHTML} from '@portabletext/to-html'

  export let data
</script>

<h1>{data.author.name}</h1>

{#if data.author.image}
  <SanityImage image={data.author.image} maxWidth={700} />
{/if}

{#if data.author?.bio}
  {@html toHTML(data.author.bio)}
{/if}

<!-- The preferred method would be to use https://github.com/portabletext/svelte-portabletext for {data.author.bio} -->

<h2>Posts by {data.author.name}</h2>

<PostsGrid posts={data.author.posts} />
