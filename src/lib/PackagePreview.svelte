<script>
  import SanityImage from './SanityImage.svelte'

  export let previewImageOne
  export let title
  export let cost
  export let style
  export let linkToPackage
  export let features = []
</script>

<a
  rel="prefetch"
  class={'pack ' + style}
  style={`--previewImage: url("${previewImageOne}");`}
  href={linkToPackage}
>
  <div>
    <h2>{title}</h2>
    <h3>{cost}</h3>
    <ul>
      {#each features as feature}
        <li>{feature}</li>
      {/each}
    </ul>
  </div>

  <SanityImage image={previewImageOne} />
</a>

<style>
  .pack :global(.sanity-img) {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 1000px;
    shape-outside: ellipse();
    align-self: center;

    grid-area: img;
  }

  .pack.light :global(.sanity-img) {
    border: solid var(--dark) 2px;
    box-shadow: var(--shadow-25);
    justify-self: center;
  }

  .pack.dark :global(.sanity-img) {
    border: solid var(--light) 2px;
    box-shadow: var(--shadow);
    justify-self: center;
  }

  @media (min-width: 768px) {
    .pack :global(.sanity-img) {
      height: 250px;
      width: 250px;
    }
  }

  a {
    position: relative;
    box-shadow: var(--shadow-inset-top);

    overflow: hidden;

    display: grid;
    grid-template-areas:
      'img'
      'info';

    padding-block: var(--space-2);

    transition: all 200ms ease-in-out;

    text-decoration: none;

    outline: none;
  }

  .dark {
    background: var(--dark);
    color: var(--light);
  }

  .light {
    background: var(--light);
    color: var(--dark);
  }

  @media (min-width: 768px) {
    a:focus,
    a:hover {
      padding-block: var(--space-4);
    }

    .dark {
      grid-template-areas: '. info img .';
    }

    .light {
      grid-template-areas: '. img info .';
    }

    a > div {
      max-width: var(--content-max-width);
    }

    a {
      gap: var(--space-5);
      grid-template-columns: repeat(4, 1fr);
    }
  }

  a:focus,
  a:hover {
    outline: none;
  }
  a.dark:focus,
  a.dark:hover {
    background: var(--dark-hover);
  }
  a.light:focus,
  a.light:hover {
    background: var(--dark-50);
  }

  a > div {
    grid-area: info;
    max-width: var(--content-max-width);
  }

  h2 {
    font-family: var(--font-accent);
  }
  h2,
  h3 {
    position: relative;
    font-size: var(--font-largest);
    font-weight: bold;
    margin-block: var(--space-2);
    text-align: center;
    z-index: 0;
  }
  ul {
    display: flex;
    flex-direction: column;
    text-align: center;
    list-style: circle;
    padding-inline: var(--space-2);
    margin-block: var(--space-2);
  }
  li {
    list-style-position: inside;
  }
</style>
