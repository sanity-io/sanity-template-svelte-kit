<script>
  import {onDestroy, onMount} from 'svelte'
  import {browser} from '$app/environment'

  import SanityImage from './SanityImage.svelte'
  /** @type {any[]} */
  export let photos = []

  /** @type {any} */
  let fullscreened

  /** @type {(...a: any) => any} */
  function handleImageClicked(p) {
    if (browser) {
      document.body.style.overflow = 'hidden'
    }
    fullscreened = p
  }

  function closeFullscreened() {
    if (browser) {
      document.body.style.overflow = 'unset'
    }
    if (fullscreened) {
      fullscreened = null
    }
  }
  /** @type {(...a: any) => any} */
  function handleEscape(e) {
    if (e.key === 'Escape') {
      closeFullscreened()
    }
  }
  onMount(() => {
    if (browser) {
      document.addEventListener('keydown', handleEscape)
    }
  })

  onDestroy(() => {
    if (browser) {
      document.removeEventListener('keydown', handleEscape)
    }
    closeFullscreened()
  })
</script>

{#if fullscreened}
  <div class="fs-container">
    <div class="fs-image-container">
      <SanityImage maxHeight={1000} image={fullscreened.image} />
    </div>
    <button on:click={closeFullscreened}>Close</button>
  </div>
{/if}

<section class="container">
  <ul class="image-gallery">
    {#each photos as p}
      <li>
        <SanityImage height={500} image={p.image} on:click={(el) => handleImageClicked(p)} />
      </li>
    {/each}
  </ul>
</section>

{#if !photos.length}
  <div class="no-images">
    <p>This album doesn't have any photos currently.</p>
    <p><strong>Check back later!</strong></p>
  </div>
{/if}

<style>
  .fs-container {
    top: 0;
    left: 0;
    position: fixed;
    height: 100%;
    width: 100%;

    z-index: 1000;
    background: var(--dark-hover-95);
  }

  .fs-image-container {
    display: grid;

    place-items: center;
    align-items: center;

    height: 100%;
    width: 100%;
  }

  .fs-image-container :global(img) {
    object-fit: contain;
    border-radius: 3px;
    cursor: pointer;

    width: 100%;
    height: 100%;
    max-width: 90vw;
    max-height: calc(95vh);
    object-fit: contain;
  }
  .container {
    margin-top: var(--space-2);
    padding-bottom: var(--space-5);
    padding-inline: var(--space-2);
  }
  .image-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }

  .image-gallery > li {
    flex: auto;
    height: calc(100vw / 2);
    justify-content: center;
    display: flex;
  }

  @media (min-width: 768px) {
    .image-gallery > li {
      height: calc(100vw / 3);
    }
  }

  .image-gallery li :global(img) {
    object-fit: contain;
    vertical-align: middle;
    border-radius: 3px;
    cursor: pointer;

    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .no-images {
    text-align: center;
    line-height: var(--font-largest);
  }

  button {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 9999;
    margin: var(--space-1);
    padding: 1rem;
    border-radius: 3px;

    background: var(--dark);
    border: none;
    color: var(--light);
    cursor: pointer;
  }

  button:hover,
  button:hover {
    background: var(--dark-50);
  }
</style>
