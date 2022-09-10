<script>
  import SanityImage from './SanityImage.svelte'

  export let topTitle = ''
  export let topText = ''

  export let bottomTitle = ''
  export let bottomText = ''

  /** @type {any} */
  export let image
</script>

<div id="about">
  <section class="bio bio-light" id="bio">
    <div>
      <h2>{@html topTitle}</h2>
      <p>
        {@html topText}
      </p>
    </div>
  </section>
  {#if image}
    <SanityImage classes={'portrait desktop-portrait'} {image} />
  {/if}
  <section class="bio bio-dark" id="bio-travel">
    <div>
      {#if image}
        <SanityImage classes={'portrait mobile-portrait'} {image} />
      {/if}
      <p>
        {@html bottomText}
      </p>
      <h2>{@html bottomTitle}</h2>
    </div>
  </section>
</div>

<style>
  div#about {
    position: relative;
  }

  :global(.portrait) {
    width: 150px;
    height: 150px;

    shape-outside: ellipse();

    border-radius: 10000px;
    border: solid white 2px;
    -webkit-appearance: none;
    box-shadow: 0px 0px 4px var(--dark);
    object-fit: cover;
  }

  :global(.mobile-portrait) {
    float: left;
    clear: both;

    margin-bottom: var(--space-1);
    transform: translate3d(-20px, 0, 0);
  }

  :global(.desktop-portrait) {
    display: none;
  }

  section.bio {
    padding: var(--space-2);
  }
  section.bio p {
    font-size: var(--font-big);
  }
  section.bio.bio-dark {
    padding-bottom: var(--space-2);
    background-color: var(--dark);
    color: var(--light);
  }

  @media (min-width: 768px) {
    section.bio.bio-dark {
      padding-top: var(--space-8);
      padding-bottom: var(--space-5);
    }

    section.bio.bio-light {
      padding-bottom: var(--space-8);
      padding-top: var(--space-5);
    }

    :global(.mobile-portrait) {
      display: none;
    }

    :global(.desktop-portrait) {
      position: absolute;

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: inline-block;
    }
  }

  section.bio.bio-light {
    padding-top: var(--space-5);
    background-color: var(--light);
    color: var(--dark);
  }

  #bio {
    box-shadow: var(--shadow-inset-top);

    background-image: url('/heart.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
  }

  #bio-travel {
    box-shadow: var(--shadow-inset-bottom);
    background-image: url('/travel.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;

    background-blend-mode: color-burn;
  }

  h2 {
    font-size: var(--font-larger);
    font-family: var(--font-accent);
    text-align: center;
    margin-top: var(--space-2);
    margin-bottom: var(--space-2);
  }

  @media (min-width: 768px) {
    #bio {
      background-size: 30%;
      background-repeat: no-repeat;
      background-position: center;
    }

    #bio-travel {
      background-size: 30%;
      background-repeat: no-repeat;
      background-position: center;
    }

    h2 {
      max-width: 25vw;
    }

    :global(.mobile-portrait) {
      display: none;
    }

    section.bio {
      padding: unset;
      padding-inline: var(--space-2);
    }

    div#about :global(img) {
      width: 200px;
      height: 200px;
    }

    h2 {
      text-align: unset;
    }
    section {
      display: flex;
      justify-content: center;
    }
    section > div {
      max-width: var(--content-max-width);
    }

    section:not(#contact) > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-5);
      width: 100%;
    }

    section.bio.bio-light p {
      max-width: 25vw;
    }
    section.bio.bio-dark p {
      max-width: 25vw;
    }
  }
</style>
