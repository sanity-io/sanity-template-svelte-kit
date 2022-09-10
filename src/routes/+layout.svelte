<script>
  import '../style.css'
  import Header from '../lib/Header.svelte'
  import Footer from '../lib/Footer.svelte'
  import Transition from '../lib/Transition.svelte'
  import {siteStore} from '../lib/store'
  import {urlFor} from '../lib/sanityClient'

  export const prerender = true

  export let data
  const url = data.url
  const site = data.site
  $siteStore = site
</script>

<svelte:head>
  <title>{site.title}</title>
  <meta name="description" content={site.description ?? "Kelsey Lea's Photography Portfolio"} />
  <meta name="keywords" content={site.keywords?.join(', ') ?? 'Photography'} />
  <meta property="og:image" content={urlFor(site.bioImage).width(500).height(500).url()} />
</svelte:head>

<Header facebookUrl={site.facebookUrl} instagramUrl={site.instagramUrl} />
<div>
  <main>
    <Transition {url}>
      <slot />
    </Transition>
  </main>
  <Footer facebookUrl={site.facebookUrl} instagramUrl={site.instagramUrl} />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  main {
    flex: 1;
  }
</style>
