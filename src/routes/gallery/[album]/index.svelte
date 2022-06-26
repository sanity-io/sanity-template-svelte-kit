<script context="module">
  export async function load({params, fetch}) {
    try {
      const url = `/gallery/${params.album}/${params.album}.json`
      const res = await fetch(url)
      const data = await res.json()

      if (data?.album) {
        return {
          props: data.album
        }
      }
    } catch (err) {
      return {
        status: 500,
        error: new Error(`Could not load url`)
      }
    }
    return {props: {name, quote, photos}}
  }
</script>

<script>
  // import PortableText from '@portabletext/svelte'
  // import Code from '$lib/Code.svelte'
  // import Link from '$lib/Link.svelte'
  // import ImageBlock from '$lib/ImageBlock.svelte'
  // import AuthorBlock from '$lib/AuthorBlock.svelte'
  // import AuthorCard from '$lib/AuthorCard.svelte'
  // import SanityImage from '$lib/SanityImage.svelte'

  // export let post
  import Album from '../../../lib/Album.svelte'
  import PageTitle from '../../../lib/PageTitle.svelte'

  export let name
  export let photos
  export let quote
</script>

<svelte:head>
  <!-- <title>{post.title}</title> -->
</svelte:head>

<PageTitle title={name} subtitle="Gallery" {quote} />
<Album {photos} />

<!-- <h1>{post.title}</h1>
<p>
  Published {new Date(post.publishedAt).toLocaleDateString('en', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })}
</p>

{#each post.authors || [] as author}
  <AuthorCard {author} />
{/each}

<hr />

{#if post.image}
  <SanityImage image={post.image} />
{/if}

<PortableText
  blocks={post.body}
  serializers={{
    types: {
      code: Code,
      image: ImageBlock,
      authorReference: AuthorBlock
    },
    marks: {
      link: Link
    }
  }}
/> -->
