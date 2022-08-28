<script context="module">
  export async function load({fetch}) {
    try {
      const url = `/packages/packages.json`
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
        error: new Error(`Could not load packages`)
      }
    }
  }
</script>

<script>
  import PackagePreview from '../../lib/PackagePreview.svelte'

  import PageTitle from '../../lib/PageTitle.svelte'
  export let packages = []
</script>

<PageTitle title="Pricing" quote="These are the moments to remember forever." splash="travel" />
{#each packages as pack, i}
  <PackagePreview
    title={pack.title}
    linkToPackage={pack.url}
    cost={pack.cost}
    previewImageOne={pack.cover}
    style={i % 2 === 0 ? 'dark' : 'light'}
    features={pack.features}
  />
{/each}
