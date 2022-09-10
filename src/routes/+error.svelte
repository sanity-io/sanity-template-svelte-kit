<script>
  import PageTitle from '../lib/PageTitle.svelte'
</script>

<PageTitle
  title="Sorry, something has gone wrong."
  subtitle="That page has either been removed or a system issue has occured."
/>

<div id="return">
  <a
    rel="prefetch"
    href="#return"
    on:click|preventDefault={() => history.go(-1)}
    class="btn btn-primary">Return</a
  >
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    padding: var(--space-2);  
  }

  a {
    text-decoration: none;
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
  a:hover,
  a:focus {
    outline: none;
    background: var(--dark-hover);
  }
  a:active {
    outline: none;
    background: var(--dark-active);
  }
</style>
