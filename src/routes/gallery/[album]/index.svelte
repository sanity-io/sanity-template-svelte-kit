<script context="module">
  export async function load({params, fetch}) {
    try {
      const url = `/gallery/${params.album}/${params.album}.json`
      const res = await fetch(url)
      const data = await res.json()
      if (data?.album) {
        return {
          props: data.album
        }
      }
    } catch (err) {
      return {
        status: 500,
        error: new Error(`Could not load url`)
      }
    }
  }
</script>

<script>
  import Album from '../../../lib/Album.svelte'
  import PageTitle from '../../../lib/PageTitle.svelte'

  export let name
  export let photos
  export let quote
  export let splash
</script>

<svelte:head>
  <title>Kelsey Lea Photography | Gallery | {name}</title>
</svelte:head>

<PageTitle title={name} subtitle="Gallery" {quote} {splash} />
<Album {photos} />
