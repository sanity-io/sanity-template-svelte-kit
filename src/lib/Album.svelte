<script>
  import {onDestroy, onMount} from 'svelte'
  import {browser} from '$app/env'

  import SanityImage from './SanityImage.svelte'
  export let photos = []
  let fullscreened
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
  <div class="fullscreen">
    <SanityImage image={fullscreened.image} />
  </div>
  <button on:click={closeFullscreened}>Close</button>
{/if}
<section>
  {#if photos && photos.length}
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

    height: 100%;
    width: 100%;

    z-index: 0;

    background: var(--dark-hover);
  }

  div.fullscreen :global(.sanity-img) {
    height: 100%;
    width: 100%;
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
