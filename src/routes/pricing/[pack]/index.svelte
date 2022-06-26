<script context="module">
  export async function load({params, fetch}) {
    try {
      const url = `/pricing/${params.pack}/${params.pack}.json`
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
  export let name
  export let quote
  export let cost
  export let blurb
  export let previewImageOne
  export let previewImageTwo
  export let features = []
  export let addons = []
</script>

<PageTitle title={name} subtitle="Packages & Pricing" {quote} />

<Package
  title={name}
  {blurb}
  {previewImageOne}
  {previewImageTwo}
  {cost}
  style="dark"
  {features}
  {addons}
/>
