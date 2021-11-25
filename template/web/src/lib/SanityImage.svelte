<script>
	import { urlFor } from './sanityClient';

	export let image;
	export let maxWidth = 1200;
</script>

<img loading="lazy" src={urlFor(image).width(maxWidth).fit('fillmax')} alt={image.alt || ''} />
