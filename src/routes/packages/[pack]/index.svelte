<script context="module">
  export async function load({params, fetch}) {
    try {
      const url = `/packages/${params.pack}/${params.pack}.json`
      const res = await fetch(url)
      const data = await res.json()
      if (data?.pack) {
        return {
          props: data.pack
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
  import Package from '../../../lib/Package.svelte'
  import PageTitle from '../../../lib/PageTitle.svelte'
  export let title
  export let quote
  export let splash
  export let cost
  export let blurb
  export let previewImageOne
  export let previewImageTwo
  export let features = []
  export let addons = []
  export let faq
</script>

<PageTitle {title} subtitle="Packages & Pricing" {quote} {splash} />

<Package
  {title}
  {blurb}
  {previewImageOne}
  {previewImageTwo}
  {cost}
  style="dark"
  {features}
  {addons}
  {faq}
/>
