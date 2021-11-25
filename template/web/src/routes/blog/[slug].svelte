<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch }) {
		try {
			const url = `/blog/${page.params.slug}.json`;
			const res = await fetch(url);
			const { post } = await res.json();

			if (post) {
				return {
					props: {
						post: await post
					}
				};
			}
		} catch (err) {
			return {
				status: 500,
				error: new Error(`Could not load url`)
			};
		}
	}
</script>

<script>
	import PortableText from '@portabletext/svelte';
	import Code from '$lib/Code.svelte';
	import Link from '$lib/Link.svelte';
	import Image from '$lib/Image.svelte';
	import { urlFor } from '$lib/sanityClient';

	export let post;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>
<p>
	published {new Date(post.publishedAt).toLocaleDateString('en', {
		month: 'long',
		day: '2-digit',
		year: 'numeric'
	})}
</p>
<hr />
<img src={urlFor(post.mainImage)} alt={post.mainImage.alt} />

<PortableText
	blocks={post.body}
	serializers={{
		types: {
			code: Code,
			image: Image
		},
		marks: {
			link: Link
		}
	}}
/>
