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

<div>
  <main>
    <Transition {url}>
      <slot />
    </Transition>
  </main>

  <Footer />
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
