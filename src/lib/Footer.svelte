<footer>
  <div id="copy">
    <p>&copy; Images by</p>
    <img src="/footer-logo.png" alt="logo" />
  </div>
  <div id="nav">
    <p>Home &bull; Pricing &bull; Gallery</p>
  </div>
  <p id="credit">
    Site by <a href="https://ca.linkedin.com/in/austin-mcphail">McPhail.dev</a>
  </p>
</footer>

<style>
  footer {
    background: var(--dark);
    color: var(--light);
    display: grid;
    grid-template-areas:
      'nav'
      'copy'
      'credit';
    justify-content: center;
    justify-items: center;
    gap: var(--space-2);
    padding: var(--space-2);
  }

  div#nav {
    grid-area: nav;
    color: inherit;
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
    footer {
      grid-template-areas: 'copy nav credit';
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
  }
</style>
