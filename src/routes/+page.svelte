<script>
  import Jumbotron from '../lib/Jumbotron.svelte'

  import Contact from '../lib/Contact.svelte'

  import About from '../lib/About.svelte'
  import {siteStore} from '../lib/store'

  export let data
  const photos = data.photos
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
