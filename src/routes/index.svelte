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
  import {siteStore} from '../lib/store'

  export let photos
</script>

<main>
  <Jumbotron {photos} />
  <About
    topText={$siteStore.bio1}
    topTitle={$siteStore.bio1Title}
    bottomText={$siteStore.bio2}
    bottomTitle={$siteStore.bio2Title}
    image={$siteStore.bioImage}
  />
  <Contact />
</main>
