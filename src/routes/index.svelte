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
  <section id="photo">
    <div id="controls">
      <button>&larr;</button>
      <a href="/">View Album</a>
      <button>&rarr;</button>
    </div>
  </section>
  <div id="about">
    <section class="bio bio-light" id="bio">
      <h2>Dedicated to bringing your special <br /> moments to life.</h2>
      <p>
        Born and raised in Moose Jaw, SK, I started my photography journey with my first DSLR camera
        at 15 years of age. After pursuing a Bachelors degree in Calgary, AB, I have realized that
        being both in Alberta and Saskatchewan is what I am destined to do!
      </p>
    </section>
    <section class="bio bio-dark" id="bio-travel">
      <p>
        I am always willing to go the distance to capture your family photos, ranching, agriculture,
        portraits, boudoir, wedding, and anything you can dream of, I am here to help!
      </p>
      <h2>Travel is my passion.</h2>
    </section>
    <img src="/temp/child.jpeg" alt="photographer portrait" />
  </div>
  <section class="bio bio-light">
    <p>
      <strong> Check out my work</strong> and <strong>get in touch</strong> with me to schedule your
      shoot today.
    </p>
  </section>
  <section class="bio bio-light" id="contact">
    <form on:submit|preventDefault={() => console.log('submitted')} id="contactform">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Name" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" placeholder="Email" />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          class="form-control"
          id="message"
          rows="3"
          placeholder="Write your message here..."
        />
      </div>
      <button type="submit" class="btn btn-primary">Send</button>
    </form>

    <p>Thank you for visiting my small town prairie portfolio!</p>
  </section>
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
  section#photo {
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

  section#photo #controls {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-bottom: var(--space-6);

    color: var(--light);
  }
  section#photo #controls button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
  }
  section#photo #controls a {
    text-decoration: none;
  }

  div#about {
    position: relative;
  }

  div#about img {
    width: 100px;
    height: 100px;
    aspect-ratio: 16/9;

    float: inline-start;
    clear: both;

    shape-outside: ellipse();
    margin: 0 var(--space-2) var(--space-2) 0;

    border-radius: 10000px;
    border: solid white 2px;
    -webkit-appearance: none;
    box-shadow: 0px 0px 4px var(--dark);
    object-fit: cover;
  }

  section.bio {
    padding: var(--space-2);
  }
  section.bio p {
    font-size: var(--font-big);
  }
  section.bio.bio-dark {
    background-color: var(--dark);
    color: var(--light);
  }
  section.bio.bio-light {
    background-color: var(--white);
    color: var(--dark);
  }

  h2 {
    font-size: var(--font-larger);
    font-family: var(--font-accent);
    text-align: center;

    margin-top: var(--space-2);
    margin-bottom: var(--space-2);
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
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: var(--space-1);
  }
  form .form-group label {
    display: none;
  }

  form .form-group input,
  form .form-group textarea {
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
