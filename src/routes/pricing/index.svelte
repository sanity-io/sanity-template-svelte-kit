<script>
  import PackagePreview from '../../lib/PackagePreview.svelte'

  import PageTitle from '../../lib/PageTitle.svelte'
</script>

<PageTitle title="Pricing" quote="These are the moments to remember forever." />

<PackagePreview
  title="Family"
  previewImageOne="/temp/family.jpeg"
  cost="$250"
  linkToPackage="/pricing/family"
  style="dark"
  features={[
    '1 hour session in a local area.',
    '1 outfit, additional extra.',
    '15 edited digital images.'
  ]}
/>
<PackagePreview
  title="Pets"
  previewImageOne="/temp/family-dog.jpeg"
  cost="$200"
  linkToPackage="/pricing/pets"
  style="light"
  features={[
    '1 hour session in a local area. 1 hour session in a local area.',
    '1 outfit, additional extra.',
    '15 edited digital images.'
  ]}
/>
<PackagePreview
  title="Couples"
  previewImageOne="/temp/lake.jpeg"
  cost="$200"
  linkToPackage="/pricing/couples"
  style="dark"
  features={[
    '1 hour session in a local area.',
    '1 outfit, additional extra.',
    '15 edited digital images.'
  ]}
/>
<PackagePreview
  title="Artistic"
  previewImageOne="/temp/wine.jpeg"
  cost="$150"
  linkToPackage="/pricing/artistic"
  style="light"
  features={[
    '1 hour session in a local area.',
    '1 outfit, additional extra. 1 hour session in a local area.',
    '15 edited digital images. 1 hour session in a local area.'
  ]}
/>

<style>
</style>
