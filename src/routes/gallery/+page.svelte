<script>
  import AlbumPreview from '../../lib/AlbumPreview.svelte'
  import PageTitle from '../../lib/PageTitle.svelte'
  export let data
  export let albums = data.albums ?? []
</script>

<PageTitle title="Gallery" quote="Beauty can be found in all things." splash="heart" />

{#each albums as album, i}
  <AlbumPreview
    title={album.title}
    cover={album.cover}
    linkToAlbum={album.url}
    style={i % 2 === 0 ? 'dark' : 'light'}
  />
{/each}
