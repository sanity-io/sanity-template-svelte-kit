<script>
  export let portableText
  $: block = portableText.block
</script>

<figure>
  <img src={block.image.url} alt={block.caption} />
  <figcaption>{block.caption}</figcaption>
</figure>