<script context="module">
  // export async function load({fetch}) {
  //   try {
  //     const res = await fetch('/blog/all.json')
  //     const data = await res.json()
  //     return {
  //       props: data
  //     }
  //   } catch (err) {
  //     console.log('500:', err)
  //   }
  // }
</script>

<script>
  import Jumbotron from '../lib/Jumbotron.svelte'

  import Contact from '../lib/Contact.svelte'

  import About from '../lib/About.svelte'

  // import AuthorCard from '$lib/AuthorCard.svelte'
  // import PostsGrid from '$lib/PostsGrid.svelte'

  // export let posts
  // export let authors
</script>

<main>
  <Jumbotron />
  <About />
  <Contact />
</main>

<!-- <PostsGrid {posts} />

<h2 style="margin-top: 4rem">Author{authors.length > 1 ? 's' : ''}</h2>

{#each authors as author}
  <AuthorCard {author} />
{/each} -->
