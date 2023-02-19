<script>
  import {page} from '$app/stores'
  if ($page.status === 500) {
    console.log(
      `Error 500: Please also check the CORS on Sanity to enable your website to accept requests from your domain/localhost`
    )
  }
</script>

<h1>{$page.status}: {$page.error.message}</h1>
{#if $page.status === 500}
  <p>
    Please also check the CORS on Sanity to enable your website to accept requests from your
    domain/localhost
  </p>
{/if}
