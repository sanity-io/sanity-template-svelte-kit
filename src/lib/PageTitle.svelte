<script>
  export let title
  export let quote
  export let subtitle
</script>

<section>
  <h2>{title}</h2>
  {#if subtitle}
    <p class="subtitle">{subtitle}</p>
  {/if}
  {#if quote}
    <p>{quote}</p>
  {/if}
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

  p.subtitle {
    font-family: var(--font);
    font-size: var(--font-large);
    color: var(--dark-75);
    text-align: center;
    margin-bottom: var(--space-2);
  }
</style>
