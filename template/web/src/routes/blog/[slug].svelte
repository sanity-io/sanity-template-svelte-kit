<script context="module">
/**
 * @type {import('@sveltejs/kit').Load}
 */
export async function load({ page, fetch }) {
  try {
      const url = `/blog/${page.params.slug}.json`
      const res = await fetch(url)
      const { post } = await res.json()
      
      if (post) {
        return { 
          props: { 
            post: await post
          }
        };
      }
    } catch (err) {
        return {
          status: 500,
          error: new Error(`Could not load url`)
        };
    }
}
</script>

<script>
  import PortableText from '@portabletext/svelte'
  import Code from '$lib/Code.svelte'
  import Link from '$lib/Link.svelte'
  import Image from '$lib/Image.svelte';
  import { urlFor } from '$lib/sanityClient';

  export let post;
</script>

<style>
  .content {
    max-width: 900px;
    margin: auto;
  }
  hr {
    border: none;
    border-bottom: 1px solid rgba(255,62,0,0.1);
    background-color: #e6e6e6;
    color: #e6e6e6;
  }
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }
  .content :global(img) {
    display: block;
    max-width: 100%;
    margin-bottom: 1rem;
    border-radius: 5px;
  }
  .content :global(figure) {
    margin: 0;
  }
  .content :global(ul) {
    line-height: 1.5;
  }
  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>



<div class="content">
  <h1>{post.title}</h1>
  <p>published {new Date(post.publishedAt)}</p>
  <hr/>
  <img src={urlFor(post.mainImage)} alt={post.mainImage.alt}>
  
  <PortableText 
    blocks={post.body}
    serializers={{
      types: {
        code: Code,
        image: Image,
      },
      marks: {
        link: Link,
      }
    }}
  />
</div>