<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header blogTitle={'SvelteKit x Sanity Blog'} />
<main style="padding: 1em">
	<slot />
</main>
<Footer />
