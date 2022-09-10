<script>
  /** @type {string[]} */
  export let addons = []
  export let blurb = ''
  $: firstHalfOfAddons = addons.slice(0, Math.ceil(addons.length / 2))
  $: secondHalfOfAddons = addons.slice(Math.ceil(addons.length / 2))
</script>

<section>
  <div>
    <h3>Addons & Extras</h3>
    {#if addons?.length}
      <div class="addons">
        <ul>
          {#each firstHalfOfAddons as addon}
            <li>
              <span>
                {addon}
              </span>
            </li>
          {/each}
        </ul>
        <ul>
          {#each secondHalfOfAddons as addon}
            <li>
              <span>
                {addon}
              </span>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
    {#if blurb}
      <p class="blurb">
        {blurb}
      </p>
    {/if}
  </div>
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    background: var(--light);
    box-shadow: var(--shadow-inset-top), var(--shadow-25);
    color: var(--dark);
  }

  section > div {
    max-width: var(--content-max-width);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .addons {
    display: grid;
    grid-template-columns: 1fr;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: disc;
    padding-inline: var(--space-2);
    list-style-position: inside;
  }
  ul:is(:last-child) {
    margin-top: 1rem;
  }

  h3 {
    text-align: center;
    margin-top: var(--space-4);
    margin-bottom: var(--space-2);
    font-weight: bold;
  }

  .blurb {
    text-align: center;
    margin-top: var(--space-2);
    margin-bottom: var(--space-4);
    padding-inline: var(--space-2);

    max-width: var(--space-20);
  }

  @media (min-width: 768px) {
    .addons {
      gap: var(--space-2);
      grid-template-columns: 1fr 1fr;
    }

    ul {
      margin-block: var(--space-2);
    }
  }
</style>
