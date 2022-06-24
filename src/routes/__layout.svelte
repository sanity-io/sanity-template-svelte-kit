<script>
  // import Header from '$lib/Header.svelte'
  // import Footer from '$lib/Footer.svelte'
  import '../style.css'
  import Header from '../lib/Header.svelte'
  import Footer from '../lib/Footer.svelte'
</script>

<svelte:head>
  <title>Kelsey Lea Photography</title>
</svelte:head>
<Header />

<slot />

<Footer />

<style>
</style>
