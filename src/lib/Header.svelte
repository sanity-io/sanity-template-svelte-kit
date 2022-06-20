<script></script>

<header>
  <a href="/" id="logo">
    <img src="header-logo.png" alt="Kelsey Lea Photography" />
  </a>
  <ul>
    <li><a href="/">Home</a></li>
    <li>&bull;</li>
    <li><a href="/about">Gallery</a></li>
    <li>&bull;</li>
    <li><a href="/contact">Pricing</a></li>
  </ul>
</header>

<style>
  header {
    position: fixed;
    width: 100%;

    display: flex;
    justify-content: space-between;

    background: linear-gradient(
      to bottom,
      var(--dark) calc(25% + 1rem),
      transparent calc(25% + 1rem)
    );
  }

  a#logo {
    position: relative;
    display: inline-block;
    padding: 1rem 4rem 1rem 1rem;
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
    background: var(--dark);
    -webkit-transform-origin: 100% 0;
    -ms-transform-origin: 100% 0;
    transform-origin: 100% 0;
    -webkit-transform: skew(-20deg);
    -ms-transform: skew(-20deg);
    transform: skew(-20deg);
    z-index: -1;
  }

  img {
    width: 100%;
    max-width: clamp(200px, 100px, 100vw);
    height: auto;
    filter: invert(100%);
  }

  ul {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    padding: 1rem;
  }

  li {
    color: var(--light);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
