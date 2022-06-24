<script>
  let images = ['/temp/lake.jpeg', '/temp/cows.jpeg', '/temp/wine.jpeg']
  let index = 0
  $: image = images[index]
  function next() {
    if (index === images.length - 1) {
      index = 0
    } else {
      index += 1
    }
  }
  function prev() {
    if (index === 0) {
      index = images.length - 1
    } else {
      index -= 1
    }
  }
</script>

<div id="photo" style:background-image={`url('${image}')`}>
  <div id="controls">
    <button on:click={prev}>&larr;</button>
    <a href="/">View Album</a>
    <button on:click={next}>&rarr;</button>
  </div>
</div>

<style>
  #photo {
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    transition: background-image 250ms;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    box-shadow: inset 0px -10rem 50px 0px rgba(0, 0, 0, 0.5);
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
