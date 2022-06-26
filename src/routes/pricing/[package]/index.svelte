<script>
  import Package from '../../../lib/Package.svelte'

  import PageTitle from '../../../lib/PageTitle.svelte'
</script>

<PageTitle
  title="Family"
  subtitle="Packages & Pricing"
  quote="These are the moments to remember forever."
/>

<Package
  title="Family"
  previewImageOne="/temp/family.jpeg"
  previewImageTwo="/temp/family.jpeg"
  cost="$250"
  style="dark"
  features={[
    '1 hour session in a local area.',
    '1 outfit, additional extra.',
    '15 edited digital images.'
  ]}
  addons={[
    'Additional family member - $25',
    'Additional location - $75',
    'Additional time - $75/30min',
    'Additional images - $8/image',
    'All images (edited & non-edited) - $150',
    'Prints - Pricing variable',
    'Travel - Based on cost of gas & distance.'
  ]}
/>
