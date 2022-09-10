<script>
  import FAQ from './FAQ.svelte'

  import PackageAddons from './PackageAddons.svelte'

  import PackageFeatures from './PackageFeatures.svelte'
  import Contact from './Contact.svelte'
  /** @type {any} */
  export let previewImageOne
  /** @type {any} */
  export let previewImageTwo
  /** @type {string} */
  export let cost
  /** @type {string[]} */
  export let features = []
  /** @type {string[]} */
  export let addons = []
  export let blurb = ''
  /** @type {{question: string, answer: string}[]} */
  export let faq = []

  /** @type {string} */
  export let title
</script>

<PackageFeatures {previewImageOne} {previewImageTwo} {cost} {features} />
{#if addons?.length || blurb}
  <PackageAddons {addons} {blurb} />
{/if}
{#if faq?.length}
  <FAQ qas={faq} />
{/if}
<Contact subject={'Photography Shoot: ' + title} />
