<script>
  import PackagePreview from '../../lib/PackagePreview.svelte'

  import PageTitle from '../../lib/PageTitle.svelte'
  export let data
  const packages = data.packages ?? []
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
