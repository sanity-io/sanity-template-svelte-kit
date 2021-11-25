<script context="module">
  export async function load({ params, fetch }) {
    try {
      const res = await fetch('/blog/all.json');
      const { posts } = await res.json()
      return { 
        props: { 
          posts 
        }
      };
    } catch (err) {
      console.log('500:', err);
    }
  };
</script>

<script>
  export let posts;
  function formatDate(date) {
    return new Date(date).toLocaleDateString()
  }
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
    padding: 0 1.5em;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='blog/{post.slug.current}'>{post.title}</a> ({formatDate(post.publishedAt)})</li>
	{/each}
</ul>