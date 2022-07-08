<script>
  export let isTopNeck = false
</script>
<div class='fretboard'
     style='
       --fretboard-border: {isTopNeck ? "5px solid" : ""}'>
  <slot />
</div>

<style>

  .fretboard {
    border-top: var(--fretboard-border);
    background-color: var(--bg-color);

    position: relative;

    width: var(--width);
    height: calc(var(--height) * var(--string-width));

    margin: 4rem auto 0;
  }
</style>
