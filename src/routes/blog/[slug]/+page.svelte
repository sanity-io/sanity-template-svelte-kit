<script>
  import {toHTML} from '@portabletext/to-html'
  import Code from '$lib/Code.svelte'
  import Link from '$lib/Link.svelte'
  import ImageBlock from '$lib/ImageBlock.svelte'
  import AuthorBlock from '$lib/AuthorBlock.svelte'
  import AuthorCard from '$lib/AuthorCard.svelte'
  import SanityImage from '$lib/SanityImage.svelte'

  /** @type {import('./$types').PageData} */
  export let data
</script>

<svelte:head>
  <title>{data.post.title}</title>
</svelte:head>

<h1>{data.post.title}</h1>
<p>
  Published {new Date(data.post.publishedAt).toLocaleDateString('en', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })}
</p>

<AuthorCard author={data.post.author} />

<hr />

{#if data.post.image}
  <SanityImage image={data.post.image} />
{/if}

<!-- The preferred method would be to use https://github.com/portabletext/svelte-portabletext for {data.post.body} -->
{@html toHTML(data.post.body)}
