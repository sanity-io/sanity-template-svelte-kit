<script>
  import SanityImage from './SanityImage.svelte'

  export let photos = []
</script>

<section>
  <div>
    {#each photos as p}
      <figure class={p.class} key={p._id}>
        <a href="/gallery">
          <SanityImage styles="width: 100%;" image={p.image} />
        </a>
      </figure>
    {/each}
  </div>
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
    display: grid;
    place-content: center;
    padding-bottom: var(--space-5);
    padding-inline: var(--space-2);
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

  section > div:not(.no-images) {
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
