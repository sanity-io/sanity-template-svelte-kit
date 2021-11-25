<script>
	import { urlFor } from './sanityClient';

	export let image;
	export let maxWidth = 1200;
	export let alt = undefined;
</script>

{#if image}
	<img
		loading="lazy"
		src={urlFor(image).width(maxWidth).fit('fillmax')}
		alt={alt || image.alt || ''}
	/>
{/if}
