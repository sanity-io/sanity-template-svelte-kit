<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({url, fetch}) => {
    const siteRes = await fetch(`./site.json`)
    const site = await siteRes.json()

    return {props: {url: url.href, site}, stuff: {url: url.href, site}}
  }
</script>

<script>
  import '../style.css'
  import Header from '../lib/Header.svelte'
  import Footer from '../lib/Footer.svelte'
  import Transition from '../lib/Transition.svelte'
  import {siteStore} from '../lib/store'

  export let url
  export let site
  $siteStore = site
</script>

<svelte:head>
  <title>{site.title}</title>
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
