<script context="module">
	export async function load({ fetch }) {
		try {
			const res = await fetch('/blog/all.json');
			const { posts } = await res.json();
			return {
				props: {
					posts
				}
			};
		} catch (err) {
			console.log('500:', err);
		}
	}
</script>

<script>
	import PostCard from '$lib/PostCard.svelte';

	export let posts = [];
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<section>
	{#each posts as post (post.slug.current)}
		<PostCard {post} />
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 3rem 2rem;
		margin-top: 3rem;
	}
</style>
