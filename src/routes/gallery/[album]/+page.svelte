<script>
  import Album from '../../../lib/Album.svelte'
  import PageTitle from '../../../lib/PageTitle.svelte'

  export let data

  const name = data.name
  const photos = data.photos
  const quote = data.quote
  const splash = data.splash
</script>

<svelte:head>
  <title>Kelsey Lea Photography | Gallery | {name}</title>
</svelte:head>

<PageTitle title={name} subtitle="Gallery" {quote} {splash} />
<Album {photos} />
