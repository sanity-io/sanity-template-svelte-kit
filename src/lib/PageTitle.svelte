<script>
  export let title
  export let quote
</script>

<section>
  <h2>{title}</h2>
  <p>{quote}</p>
</section>

<style>
  section {
    display: grid;
    place-items: center;
    padding-block: var(--space-10);
    color: var(--dark);
  }

  h2 {
    font-size: var(--font-largest);
    font-weight: bold;
    margin-block: var(--space-2);
  }

  p {
    font-family: var(--font-accent);
    font-size: var(--font-large);
  }
</style>
