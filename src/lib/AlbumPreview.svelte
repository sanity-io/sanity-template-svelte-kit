<script>
  import {urlFor} from './sanityClient'
  export let cover = ''
  export let title = ''
  export let quote = ''
  export let style = ''
  export let linkToAlbum = ''

  const previewImageOne = urlFor(cover).height(500).url()
</script>

<a
  rel="prefetch"
  class={style}
  style={`--previewImage: url("${previewImageOne}");`}
  href={linkToAlbum}
>
  <div>
    <div>
      <h2>{title}</h2>
      {#if quote}
        <p>{quote}</p>
      {/if}
    </div>
  </div>
  <div class="img" />
</a>

<style>
  div.img {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;

    background-image: var(--previewImage);

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    transition: all 200ms;
  }

  div.img::after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    background: var(--dark-25);
    z-index: 0;

    transition: all 200ms ease-in-out;
  }

  a {
    position: relative;
    box-shadow: var(--shadow-inset-top);
    color: var(--light);

    overflow: hidden;

    display: flex;
    justify-content: center;
    padding-block: var(--space-6);

    transition: all 200ms ease-in-out;

    text-decoration: none;

    outline: none;
  }

  a:focus,
  a:hover {
    outline: none;
  }

  @media (min-width: 768px) {
    a:focus,
    a:hover {
      padding-block: var(--space-8);
    }
  }

  a:focus div.img::after,
  a:hover div.img::after {
    background: var(--dark-50);
  }

  a > div:not(.img) {
    display: grid;
    justify-items: center;
    align-items: center;
    gap: var(--space-2);
    max-width: var(--content-max-width);
  }

  h2 {
    position: relative;
    font-family: var(--font-accent);
    font-size: var(--font-largest);
    font-weight: bold;
    margin-block: var(--space-2);
    text-align: center;
    z-index: 0;
    text-shadow: 0 0 6px var(--dark-hover), 0 0 10px var(--dark-hover);
  }

  p {
    position: relative;
    font-size: var(--font-large);
    text-align: center;
    z-index: 0;
    text-shadow: 0 0 6px var(--dark-hover), 0 0 10px var(--dark-hover);
  }
</style>
