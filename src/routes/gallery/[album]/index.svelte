<script>
  import PageTitle from '../../../lib/PageTitle.svelte'
  export let photos = [
    {slug: {current: 'family'}, title: 'Family', image: '/temp/family.jpeg', class: ''},
    {slug: {current: 'pets'}, title: 'Pets', image: '/temp/family-dog.jpeg', class: ''},
    {slug: {current: 'couples'}, title: 'Couples', image: '/temp/lake.jpeg', class: 'landscape'},
    {slug: {current: 'artistic'}, title: 'Artistic', image: '/temp/wine.jpeg', class: 'landscape'}
  ]
</script>

<PageTitle title="Album Name" quote="Album Quote" />

<section>
  <div>
    {#each photos as p}
      <figure class={p.class} key={p.slug.current}>
        <a href="/gallery">
          <img style="max-height: 75vh; objectFit: contain;" src={p.image} alt={p.title} />
        </a>
      </figure>
    {/each}
  </div>
</section>

<style>
  section {
    margin-top: var(--space-2);
    display: grid;
    place-content: center;
    padding-bottom: var(--space-5);
    padding-inline: var(--space-2);
  }

  img {
    min-width: 100%;
    max-width: 100%;
    display: block;
  }

  figure {
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
  }

  figure img {
    grid-row: 1 / -1;
    grid-column: 1;
  }

  figure a {
    text-decoration: none;
  }

  figcaption {
    grid-row: 2;
    grid-column: 1;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 0.2em 0.5em;
    justify-self: start;
  }

  section > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: masonry;
    gap: var(--space-2);
    max-width: var(--content-max-width);
  }
  .landscape {
    grid-column-end: span 2;
  }
  @media (min-width: 768px) {
    section > div {
      grid-template-columns: repeat(3, 1fr);
    }
    .landscape {
      grid-column-end: unset;
    }
  }
</style>
