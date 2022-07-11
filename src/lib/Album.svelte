<script>
  import {onDestroy, onMount} from 'svelte'

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
  let fullscreened
  function handleImageClicked(p) {
    document.body.style.overflow = 'hidden'
    fullscreened = p
  }

  function closeFullscreened() {
    if (fullscreened) {
      document.body.style.overflow = 'unset'
      fullscreened = null
    }
  }

  function handleEscape(e) {
    if (e.key === 'Escape') {
      closeFullscreened()
    }
  }
  onMount(() => {
    if (!window) return
    window.addEventListener('keydown', handleEscape)
  })

  onDestroy(() => {
    if (!window) return
    window.removeEventListener('keydown', handleEscape)
    closeFullscreened()
  })
</script>

{#if fullscreened}
  <div class="fullscreen">
    <SanityImage image={fullscreened.image} />
  </div>
  <button on:click={closeFullscreened}>Close</button>
{/if}
<section>
  {#if photos && photos.length && average}
    <div class="grid-wrapper">
      {#each photos as p}
        <div class={'img'}>
          <SanityImage image={p.image} on:click={(el) => handleImageClicked(p)} />
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

  .grid-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-1);
    justify-content: center;
  }

  div.img {
    cursor: pointer;
    max-width: 500px;
  }
  div.img :global(.sanity-img) {
    width: 100%;
    object-fit: contain;
    border-radius: 5px;
  }

  div.fullscreen {
    position: fixed;
    top: 0;
    left: 0;

    height: 100vh;
    width: 100vw;

    padding: var(--space-1);

    display: grid;
    place-items: center;

    z-index: 0;

    background: var(--dark-hover);
  }

  div.fullscreen :global(.sanity-img) {
    height: 95vh;
    object-fit: contain;
    border-radius: 5px;
  }
  button {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 9999;
    margin: var(--space-1);
    padding: var(--space-1);

    background: var(--dark);
    border: none;
    color: var(--light);
    font-size: var(--font-large);
    cursor: pointer;
  }

  button:hover,
  button:hover {
    background: var(--dark-50);
  }
</style>
