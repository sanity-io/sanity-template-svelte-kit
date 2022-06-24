<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({url}) => ({props: {url: url.href}})
</script>

<script>
  import '../style.css'
  import Header from '../lib/Header.svelte'
  import Footer from '../lib/Footer.svelte'
  import Transition from '../lib/Transition.svelte'

  export let url
</script>

<svelte:head>
  <title>Kelsey Lea Photography</title>
</svelte:head>
<Header />

<Transition {url}>
  <slot />
</Transition>

<Footer />

<style>
</style>
