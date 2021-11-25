<script context="module">
  import { page } from '$app/stores'
</script>
<script>
  export let blogTitle = 'My Blog';

  let path;
  $:({ path } = $page);
</script>

<header>
  <span>{blogTitle}</span>
  <nav>
    <ul>
      <li><a class='{path === "/" ? "selected" : ""}' href='/'>home</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1em;
  }
  header > span {
    font-size: 1.2rem;
  }
  nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding-right: 1em;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}
	li {
		display: block;
		float: left;
	}
	.selected {
		position: relative;
		display: inline-block;
	}
	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: #ff3e00;
		display: block;
		bottom: -1px;
	}
	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

  @media screen and (min-width: 400px){
    header {
      flex-direction: row-reverse;
      align-items: center;
    }
  }
</style>