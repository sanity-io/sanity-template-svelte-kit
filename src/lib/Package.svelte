<script>
  import FAQ from './FAQ.svelte'

  import PackageAddons from './PackageAddons.svelte'

  import PackageFeatures from './PackageFeatures.svelte'
  import Contact from './Contact.svelte'

  export let previewImageOne
  export let previewImageTwo
  export let cost
  export let features = []
  export let addons = []
  export let blurb = ''

  export let title
</script>

<PackageFeatures {previewImageOne} {previewImageTwo} {cost} {features} />
{#if addons?.length || blurb}
  <PackageAddons {addons} {blurb} />
{/if}
<FAQ />
<Contact />
