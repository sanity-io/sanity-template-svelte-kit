<script>
  export let portableText

  $: value = portableText.value
</script>

<pre>
  <!-- If you want syntax highlighting on you code values, load PrismJs.com in your __layout.svelte 😉 -->
  <code class="language-{value.language}">{value.code}</code>
</pre>
