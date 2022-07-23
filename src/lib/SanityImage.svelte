<script>
  import {urlFor} from './sanityClient'

  export let image
  export let maxWidth = 1200
  export let maxHeight = 1200
  export let alt = undefined
  export let styles = ''
  export let classes = ''
</script>

{#if image}
  <img
    on:click
    loading="lazy"
    src={urlFor(image).maxWidth(maxWidth).maxHeight(maxHeight).fit('fillmax')}
    alt={alt || image.alt || ''}
    style="transition: .2s opacity; {styles}; --image-url: url('${urlFor(image)
      .width(maxWidth)
      .height(maxHeight)
      .fit('fillmax')}')"
    class={`sanity-img ${classes}`}
  />
{/if}
