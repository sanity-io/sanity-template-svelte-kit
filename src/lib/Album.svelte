<script>
  import SanityImage from './SanityImage.svelte'
  export let photos = []
  function getWidthAndHeight(image) {
    const dimensions = image?.asset?._ref?.split('-')[2]
    const [width, height] = dimensions.split('x').map(Number)
    return {width, height}
  }
  function getAverageWidthAndHeight(images) {
    if (!images) return

    const widths = images.map((i) => getWidthAndHeight(i.image)).map(({width}) => width)
    const heights = images.map((i) => getWidthAndHeight(i.image)).map(({height}) => height)
    return {
      width: widths.reduce((a, b) => a + b, 0) / widths.length,
      height: heights.reduce((a, b) => a + b, 0) / heights.length
    }
  }

  $: average = getAverageWidthAndHeight(photos)

  function getLandscapeOrPortrait(image) {
    const {width, height} = getWidthAndHeight(image)
    if (width >= average.width && width > height) return 'wide'
    if (height >= average.height && height > width) return 'tall'
    if (width > height) return 'landscape'
    if (height > width) return 'portrait'
    return ''
  }
</script>

<section>
  {#if photos && photos.length && average}
    <div class="grid-wrapper">
      {#each photos as p}
        {@const imgClass = getLandscapeOrPortrait(p.image)}
        <div class={imgClass}>
          <SanityImage image={p.image} />
        </div>
      {/each}
    </div>
  {/if}

  {#if !photos.length}
    <div class="no-images">
      <p>This album doesn't have any photos currently.</p>
      <p><strong>Check back later!</strong></p>
    </div>
  {/if}
</section>

<style>
  .no-images {
    text-align: center;
    line-height: var(--font-largest);
  }
  section {
    margin-top: var(--space-2);
    padding-bottom: var(--space-5);
    padding-inline: var(--space-2);
  }

  :global(img.sanity-img) {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    display: inline-block;
  }

  /* Main CSS */
  .grid-wrapper > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  :global(.grid-wrapper > div > img.sanity-img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  .grid-wrapper {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 200px;
    grid-auto-flow: dense;
  }

  .grid-wrapper .landscape {
    grid-column: span 2;
  }
  .grid-wrapper .portrait {
    grid-row: span 2;
  }

  .grid-wrapper .wide {
    grid-column: span 2;
  }
  .grid-wrapper .tall {
    grid-row: span 2;
  }

  @media (min-width: 768px) {
    .grid-wrapper .landscape {
      grid-column: span 2;
    }
    .grid-wrapper .portrait {
      grid-row: span 2;
    }

    .grid-wrapper .wide {
      grid-column: span 3;
      grid-row: span 2;
    }
    .grid-wrapper .tall {
      grid-column: span 2;
      grid-row: span 3;
    }
  }
</style>
