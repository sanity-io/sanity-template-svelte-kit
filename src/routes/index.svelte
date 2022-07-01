<script context="module">
  export async function load({params, fetch}) {
    try {
      const url = `/jumbotron.json`
      const res = await fetch(url)
      const data = await res.json()
      if (data?.photos) {
        return {
          props: data
        }
      }
    } catch (err) {
      return {
        status: 500,
        error: new Error(`Could not load url`)
      }
    }
  }
</script>

<script>
  import Jumbotron from '../lib/Jumbotron.svelte'

  import Contact from '../lib/Contact.svelte'

  import About from '../lib/About.svelte'

  // import AuthorCard from '$lib/AuthorCard.svelte'
  // import PostsGrid from '$lib/PostsGrid.svelte'

  // export let posts
  // export let authors
  export let photos
</script>

<main>
  <Jumbotron {photos} />
  <About />
  <Contact />
</main>

<!-- <PostsGrid {posts} />

<h2 style="margin-top: 4rem">Author{authors.length > 1 ? 's' : ''}</h2>

{#each authors as author}
  <AuthorCard {author} />
{/each} -->
