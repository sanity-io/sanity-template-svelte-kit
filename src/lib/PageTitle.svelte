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
    padding-inline: var(--space-2);
    color: var(--dark);
    box-shadow: var(--shadow-25);
  }

  h2 {
    font-size: var(--font-largest);
    font-weight: bold;
    margin-block: var(--space-2);
    text-align: center;
  }

  p {
    font-family: var(--font-accent);
    font-size: var(--font-large);
    text-align: center;
  }
</style>
