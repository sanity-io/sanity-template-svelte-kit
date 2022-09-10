<script>
  import {onMount} from 'svelte'

  import {urlFor} from './sanityClient'

  /** @type {any} */
  export let photos = []
  let index = 0
  $: nextIndex = index === photos.length - 1 ? 0 : index + 1
  $: prevIndex = index === 0 ? photos.length - 1 : index - 1
  $: image = photos[index]

  /** @type {ReturnType<setInterval>|null} */
  let timeout
  function next() {
    state = 'next'
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      index = nextIndex
      image = photos[index]
      state = ''
    }, 500)
  }
  function prev() {
    state = 'prev'
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      index = prevIndex
      image = photos[index]
      state = ''
    }, 500)
  }

  let state = ''
  /** @type {ReturnType<setInterval>|null} */
  let interval
  onMount(() => {
    interval = setInterval(() => {
      next()
    }, 5000)
  })
</script>

{#key index}
  <div id="wrapper">
    <div
      class={`jumbo ${state}`}
      style={`
      --img: url('${urlFor(photos[index].image).height(1000).width(1000)}');
      --next-img: url('${urlFor(photos[nextIndex].image).height(1000).width(1000)}');
      --prev-img: url('${urlFor(photos[prevIndex].image).height(1000).width(1000)}');
      `}
      role="img"
      alt={photos[index].image.alt || ''}
    />

    <div id="controls">
      <button
        on:click={() => {
          if (interval) clearInterval(interval)
          prev()
        }}>&larr;</button
      >
      <a rel="prefetch" href="/gallery/{image.album?.album?.slug?.current}">View Album</a>
      <button
        on:click={() => {
          if (interval) clearInterval(interval)
          next()
        }}>&rarr;</button
      >
    </div>
  </div>
{/key}

<style>
  #wrapper {
    position: relative;

    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    box-shadow: inset 0px -10rem 50px 0px rgba(0, 0, 0, 0.5);
  }

  .jumbo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    background-image: var(--img);
  }

  .next {
    background-image: var(--next-img);
    transition: 500ms;
  }
  .prev {
    background-image: var(--prev-img);
    transition: 500ms;
  }

  #wrapper #controls {
    position: absolute;

    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-bottom: var(--space-6);

    color: var(--light);
  }

  #wrapper #controls button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
  }
  #wrapper #controls a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
</style>
