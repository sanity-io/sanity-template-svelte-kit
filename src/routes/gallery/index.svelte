<script context="module">
  export async function load({fetch}) {
    try {
      const url = `/gallery/gallery.json`
      const res = await fetch(url)
      const data = await res.json()

      if (data) {
        return {
          props: data
        }
      }
    } catch (err) {
      return {
        status: 500,
        error: new Error(`Could not load gallery`)
      }
    }
  }
</script>

<script>
  import AlbumPreview from '../../lib/AlbumPreview.svelte'
  import PageTitle from '../../lib/PageTitle.svelte'
  export let albums = []
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
