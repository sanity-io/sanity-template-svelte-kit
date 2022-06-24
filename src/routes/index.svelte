<script context="module">
  // export async function load({fetch}) {
  //   try {
  //     const res = await fetch('/blog/all.json')
  //     const data = await res.json()
  //     return {
  //       props: data
  //     }
  //   } catch (err) {
  //     console.log('500:', err)
  //   }
  // }
</script>

<script>
  import Jumbotron from '../lib/Jumbotron.svelte'

  import Contact from '../lib/Contact.svelte'

  import About from '../lib/About.svelte'

  // import AuthorCard from '$lib/AuthorCard.svelte'
  // import PostsGrid from '$lib/PostsGrid.svelte'

  import Header from '../lib/Header.svelte'

  // export let posts
  // export let authors
</script>

<svelte:head>
  <title>Kelsey Lea Photography</title>
</svelte:head>
<Header />

<main>
  <Jumbotron />
  <About />
  <Contact />
</main>
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

<!-- <PostsGrid {posts} />

<h2 style="margin-top: 4rem">Author{authors.length > 1 ? 's' : ''}</h2>

{#each authors as author}
  <AuthorCard {author} />
{/each} -->
<style>
  #photo {
    height: 100vh;
    background-image: url('/temp/lake.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    box-shadow: inset 0px -10rem 50px 0px rgba(0, 0, 0, 0.5);
  }

  #photo #controls {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-bottom: var(--space-6);

    color: var(--light);
  }
  #photo #controls button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
  }
  #photo #controls a {
    text-decoration: none;
  }

  section.bio.bio-light {
    padding-top: var(--space-5);
    background-color: var(--light);
    color: var(--dark);
  }

  @media (min-width: 768px) {
    section {
      display: flex;
      justify-content: center;
    }
    section > div {
      max-width: var(--content-max-width);
      margin: auto;
    }

    section:not(#contact) > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-5);
      width: 100%;
    }

    section.bio.bio-light p {
      text-justify: newspaper;
      max-width: 25vw;
    }
  }

  section#contact {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section#contact p {
    margin-block: var(--space-2);
    font-size: var(--font-larger);
    font-family: var(--font-accent);
    text-align: center;
  }

  section#contact form {
    clear: both;
    display: grid;
    gap: var(--space-1);

    padding-inline: var(--space-2);
  }
  form label {
    display: none;
  }

  form input,
  form textarea {
    display: block;
    padding: 1rem;
    border-radius: var(--br);
    border: none;

    -webkit-appearance: none;
    box-shadow: var(--shadow-inset-25);
  }

  form button {
    cursor: pointer;
    border: none;
    font-family: var(--font-accent);
    background: var(--dark);
    color: var(--light);
    padding: var(--space-1);
    border-radius: var(--br);

    -webkit-appearance: none;
    box-shadow: var(--shadow-25);
    transition: all 250ms ease-in-out;
  }
  form button:hover,
  form button:focus {
    outline: none;
    background: var(--dark-hover);
  }
  form button:active {
    outline: none;
    background: var(--dark-active);
  }

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
