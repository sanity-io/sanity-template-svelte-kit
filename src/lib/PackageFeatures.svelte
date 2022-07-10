<script>
  import {urlFor} from './sanityClient'

  export let previewImageOne
  export let previewImageTwo
  export let cost
  export let features = []

  const previewImageOneUrl = urlFor(previewImageOne).url()
  const previewImageTwoUrl = urlFor(previewImageTwo).url()
</script>

<section class="features">
  <div class="img" style={`--previewImage: url("${previewImageOneUrl}");`} />
  <div class="content">
    <p>Starting at</p>
    <h3>{cost}</h3>
    <ul>
      {#each features as feature}
        <li>{feature}</li>
      {/each}
    </ul>
  </div>
  <div class="img" style={`--previewImage: url("${previewImageTwoUrl}");`} />
</section>

<style>
  .img {
    background-image: var(--previewImage);

    width: 100%;
    height: 100%;

    /* Create the parallax scrolling effect */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  p {
    font-family: var(--font-accent);
    font-size: var(--font-large);
    text-align: center;
  }
  h3 {
    font-size: var(--font-largest);
    font-weight: bold;
    margin-block: var(--space-2);
    text-align: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    text-align: center;
    list-style: circle;
    padding-inline: var(--space-2);
    margin-block: var(--space-2);
    gap: 1rem;
  }
  li {
    list-style-position: inside;
  }

  .content {
    padding: var(--space-2);
  }

  section.features {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;

    background: var(--dark);
    color: var(--light);

    box-shadow: var(--shadow-inset-top);
  }

  @media (min-width: 768px) {
    section.features {
      grid-template-columns: 1fr 2fr 1fr;
      grid-template-rows: 1fr;
    }
  }
</style>
