<script>
  import {fade} from 'svelte/transition'
  export let url = ''
</script>

<div class="transition-outer">
  {#key url}
    <div class="transition-inner" in:fade={{duration: 250}} out:fade={{duration: 250}}>
      <slot />
    </div>
  {/key}
</div>

<style>
  .transition-outer {
    display: grid;
    grid-template: 1fr 1fr;
  }
  .transition-inner {
    grid-row: 1;
    grid-column: 1;
  }
</style>
