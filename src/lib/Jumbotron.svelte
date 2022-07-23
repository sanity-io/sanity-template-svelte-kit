<script>
  import {fade} from 'svelte/transition'
  import SanityImage from './SanityImage.svelte'

  export let photos = []

  let index = 0
  $: image = photos[index]
  function next() {
    if (index === photos.length - 1) {
      index = 0
    } else {
      index = index + 1
    }
  }
  function prev() {
    if (index === 0) {
      index = photos.length - 1
    } else {
      index = index - 1
    }
  }
</script>

{#key index}
  <div id="photo" transition:fade={{duration: 200}}>
    <SanityImage image={image.image} />

    <div id="controls">
      <button on:click={prev}>&larr;</button>
      <a rel="prefetch" href="/gallery/{image.album?.album?.slug?.current}">View Album</a>
      <button on:click={next}>&rarr;</button>
    </div>
  </div>
{/key}

<style>
  #photo {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    box-shadow: inset 0px -10rem 50px 0px rgba(0, 0, 0, 0.5);
  }

  :global(#photo .sanity-img) {
    position: absolute;
    height: 100%;
    width: 100%;

    object-fit: cover;
    /* transitions */
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    -ms-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    transition: all 0.4s ease;

    z-index: -1;
  }

  #photo #controls {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-bottom: var(--space-6);

    color: var(--light);
  }
  #photo #controls button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
  }
  #photo #controls a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
</style>
