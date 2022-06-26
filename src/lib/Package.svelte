<script>
  import PackageAddons from './PackageAddons.svelte'

  import PackageFeatures from './PackageFeatures.svelte'
  import Contact from './Contact.svelte'

  export let previewImageOne
  export let previewImageTwo
  export let cost
  export let features = []
  export let addons = []
  export let blurb = `All sessions are customizable to fit your unique requirements! Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Maecenas semper neque a odio consequat pharetra. Feel free to
        ask any questions you may have.`

  export let title
</script>

<PackageFeatures {previewImageOne} {previewImageTwo} {cost} {features} />
<PackageAddons {addons} {blurb} />
<Contact />
