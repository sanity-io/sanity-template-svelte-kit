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

  .grid-wrapper :global(.sanity-img) {
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
  .grid-wrapper :global(.sanity-img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  .grid-wrapper {
    display: grid;
    grid-gap: var(--space-1);
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 200px;
    grid-auto-flow: dense;
  }

  .grid-wrapper .landscape {
    grid-row: span 2;
    grid-column: span 2;
  }
  .grid-wrapper .wide {
    grid-row: span 2;
    grid-column: span 2;
  }

  .grid-wrapper .portrait {
    grid-row: span 2;
    grid-column: span 1;
  }
  .grid-wrapper .tall {
    grid-row: span 2;
    grid-column: span 1;
  }

  @media (min-width: 768px) {
    .grid-wrapper {
      grid-template-columns: repeat(9, 1fr);
    }

    .grid-wrapper .landscape {
      grid-row: span 2;
      grid-column: span 3;
    }
    .grid-wrapper .wide {
      grid-row: span 3;
      grid-column: span 4;
    }

    .grid-wrapper .portrait {
      grid-row: span 3;
      grid-column: span 2;
    }
    .grid-wrapper .tall {
      grid-row: span 4;
      grid-column: span 3;
    }
  }
</style>
