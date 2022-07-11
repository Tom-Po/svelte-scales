<script>
  export let count = 0
</script>

{#each Array(count + 1) as _, i}
  <div class='fret'></div>
{/each}

<style>
  .fret {
    border-bottom: 2px solid rgba(230, 230, 230 , .2);
    height: calc(var(--string-width) - 2px);
    width: 100%;
  }
</style>
