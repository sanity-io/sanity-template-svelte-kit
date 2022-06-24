<script>
  import AlbumPreview from './AlbumPreview.svelte'

  import PageTitle from '../lib/PageTitle.svelte'
</script>

<PageTitle title="Gallery" quote="Beauty can be found in all things." />

<AlbumPreview
  title="Family"
  previewImageOne="/temp/family.jpeg"
  linkToAlbum="/gallery"
  style="dark"
/>
<AlbumPreview
  title="Pets"
  previewImageOne="/temp/family-dog.jpeg"
  linkToAlbum="/gallery"
  style="light"
/>
<AlbumPreview
  title="Couples"
  previewImageOne="/temp/lake.jpeg"
  linkToAlbum="/gallery"
  style="dark"
/>
<AlbumPreview
  title="Artistic"
  previewImageOne="/temp/wine.jpeg"
  linkToAlbum="/gallery"
  style="light"
/>

<style>
</style>
