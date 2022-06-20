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
  <section id="photo" class="shapedividers_com-958">
    <a href="/">
      <div class="title-photo">
        <p>Title of Image</p>
        <small>from</small>
      </div>
      <p class="title-album">Album Name</p>
    </a>
  </section>
  <section id="bio">
    <p>Bio</p>
    <p>
      Welcome & thank you for visiting my small town prairie photography portfolio! I’m dedicated to
      capturing your special moments and bringing them to life! Born and raised in Moose Jaw, SK, I
      started my photography journey with my first DSLR camera at 15 years of age. After pursuing a
      Bachelors degree in Calgary, AB, I have realized that being both in Alberta and Saskatchewan
      is what I am destined to do! With my passion for travel, rest assured that I will be willing
      to travel the distance to capture your special moments! Whether it be family photos, ranching,
      agriculture, individual portraits, boudoir, wedding or any other event you can think of, I am
      here to help! Check out my portfolio and get in touch with me to schedule your shoot today.
    </p>
  </section>
</main>

<!-- <PostsGrid {posts} />

<h2 style="margin-top: 4rem">Author{authors.length > 1 ? 's' : ''}</h2>

{#each authors as author}
  <AuthorCard {author} />
{/each} -->
<style>
  section {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  section#photo {
    height: 100vh;
    background-image: url('/image.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    align-items: flex-end;

    box-shadow: inset 0px -10rem 50px 0px rgba(0, 0, 0, 0.5);
  }

  section#photo a {
    display: block;
    text-decoration: none;
    padding-bottom: 4rem;
    outline: none;
  }
  section#photo a p,
  section#photo a p {
    display: inline-block;
    border-bottom: solid 2px transparent;
  }
  section#photo a:hover p,
  section#photo a:focus p {
    border-bottom: solid 2px var(--white);
  }

  section#photo .title-photo {
    font-size: 2rem;
    font-weight: 700;
    color: var(--white);
  }
  section#photo .title-photo small {
    font-size: 1rem;
    font-weight: unset;
    color: var(--white);
    text-decoration: none;
  }

  section#photo .title-album {
    font-size: 4rem;
    font-weight: 700;
    color: var(--white);
  }
  section#bio {
    height: 100vh;
    background-color: var(--white);
  }
</style>
