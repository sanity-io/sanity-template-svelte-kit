<script>
	import SanityImage from './SanityImage.svelte';

	export let portableText;
	$: ({ block } = portableText);
</script>

<figure>
	<SanityImage image={block.image} />
	<figcaption>{block.caption}</figcaption>
</figure>
