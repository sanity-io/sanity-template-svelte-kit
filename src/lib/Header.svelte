<script>
  import SocialIcon from './SocialIcon.svelte'

  let menuOpen = false
  export let facebookUrl = ''
  export let instagramUrl = ''
</script>

<header>
  <h1>
    <a href="/" id="logo">
      <img src="/header-logo.png" alt="Kelsey Lea Photography" />
    </a>
  </h1>
  <ul>
    <li class="social">
      <a href={facebookUrl} target="_blank" rel="noopener"><SocialIcon type="fb" /></a>
    </li>
    <li class="social" />
    <li class="social">
      <a href={instagramUrl} target="_blank" rel="noopener"><SocialIcon type="ig" /></a>
    </li>
    <li class="social" />
    <li><a href="/">Home</a></li>
    <li>&bull;</li>
    <li><a href="/gallery">Gallery</a></li>
    <li>&bull;</li>
    <li><a href="/packages">Packages</a></li>

    <li id="mobile-trigger">
      <button on:click={() => (menuOpen = !menuOpen)}> Menu </button>
    </li>
  </ul>

  <div id="mobile-menu" class:open={menuOpen}>
    <a href="/">
      <img src="/header-logo.png" alt="Kelsey Lea Photography" />
    </a>
    <a href="/">Home</a>
    <a href="/gallery">Gallery</a>
    <a href="/packages">Packages</a>

    <button on:click={() => (menuOpen = !menuOpen)}> Close </button>
  </div>
</header>

<style>
  header {
    position: fixed;
    width: 100%;

    display: flex;
    justify-content: space-between;

    background: linear-gradient(
      to bottom,
      var(--dark-hover) calc(25% + var(--space-2)),
      transparent calc(25% + var(--space-1))
    );

    z-index: 1;

    -webkit-appearance: none;
  }

  a#logo {
    position: relative;
    display: inline-block;
    padding: var(--space-1) 4rem var(--space-1) var(--space-1);
    overflow: hidden;
    color: var(--dark);
  }

  a#logo:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark-hover);
    -webkit-transform-origin: 100% 0;
    -ms-transform-origin: 100% 0;
    transform-origin: 100% 0;
    -webkit-transform: skew(-20deg);
    -ms-transform: skew(-20deg);
    transform: skew(-20deg);
    z-index: 1;
  }

  img {
    width: 100%;
    max-width: clamp(200px, 100px, 100vw);
    height: auto;
    filter: invert(100%);
    position: relative;
    z-index: 2;
  }

  ul {
    display: flex;
    justify-content: flex-end;
    gap: calc(var(--space-1) / 2);
    padding: var(--space-1);
  }

  li {
    color: var(--light);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li:not(.social) {
    display: none;
  }
  #mobile-trigger {
    display: inline-block;
  }

  #mobile-menu {
    position: absolute;
    transform: translate3d(0, -100%, 0);
    transition: transform 250ms ease-out;
    left: 0;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-1);
    padding: var(--space-1) 0rem var(--space-1) 0rem;

    background: var(--dark-hover);
    border-bottom: 2px var(--light) solid;

    color: var(--light);

    z-index: 3;
  }

  #mobile-menu button {
    align-self: flex-end;
    margin-right: var(--space-1);
  }

  #mobile-menu.open {
    position: absolute;
    transform: translate3d(0, 0, 0);
    top: 0;
  }
  @media (min-width: 768px) {
    #mobile-menu {
      display: none;
    }
    li:not(.social) {
      display: inline-block;
    }
    #mobile-trigger {
      display: none;
    }
  }

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    color: var(--light);
  }
</style>
