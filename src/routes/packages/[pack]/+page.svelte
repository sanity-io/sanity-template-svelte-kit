<script>
  import Package from '../../../lib/Package.svelte'
  import PageTitle from '../../../lib/PageTitle.svelte'
  export let data
  const title = data.title
  const quote = data.quote
  const splash = data.splash
  const cost = data.cost
  const blurb = data.blurb
  const previewImageOne = data.previewImageOne
  const previewImageTwo = data.previewImageTwo
  const features = data.features ?? []
  const addons = data.addons ?? []
  const faq = data.faq
</script>

<PageTitle {title} subtitle="Packages & Pricing" {quote} {splash} />

<Package {title} {blurb} {previewImageOne} {previewImageTwo} {cost} {features} {addons} {faq} />
