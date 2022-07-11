<footer>
  <div>
    <div id="copy">
      <p>&copy; Images by</p>
      <a href="/"><img src="/footer-logo.png" alt="logo" /></a>
    </div>
    <ul id="nav">
      <li><a href="/">Home</a></li>
      <li>&bull;</li>
      <li><a href="/gallery">Gallery</a></li>
      <li>&bull;</li>
      <li><a href="/packages">Packages</a></li>
    </ul>
    <p id="credit">
      Site by <a href="https://ca.linkedin.com/in/austin-mcphail">McPhail.dev</a>
    </p>
  </div>
</footer>

<style>
  footer {
    background: var(--dark);
    color: var(--light);
    display: grid;
    place-items: center;
  }

  footer > div {
    display: grid;
    grid-template-areas:
      'nav'
      'copy'
      'credit';
    justify-content: center;
    justify-items: center;
    gap: var(--space-2);
    padding: var(--space-2);
    max-width: var(--content-max-width);
  }

  #nav {
    grid-area: nav;
    color: inherit;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  #nav a {
    text-decoration: none;
  }
  #nav a:hover,
  #nav a:focus {
    text-decoration: underline;
  }

  p#credit {
    grid-area: credit;
  }
  p#credit a {
    font-weight: bold;
    text-decoration: none;
  }

  div#copy {
    grid-area: copy;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: var(--space-3);
    gap: var(--space-1);
  }
  div#copy img {
    width: clamp(100px, var(--space-2), var(--space-6));
    filter: invert(100%);
    vertical-align: middle;
  }

  @media (min-width: 768px) {
    footer > div {
      grid-template-areas: unset;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      align-content: center;
      align-items: center;
      justify-content: center;
      justify-items: center;
      gap: var(--space-6);
    }

    div#copy {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: unset;
      gap: var(--space-1);
    }

    #nav {
      grid-area: unset;
    }

    p#credit {
      grid-area: unset;
    }

    div#copy {
      grid-area: unset;
    }
  }
</style>
