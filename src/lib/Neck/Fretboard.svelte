<script>
  export let isTopNeck = false
</script>
<div class='fretboard'
     style='
       --fretboard-border: {isTopNeck ? "5px solid" : "2px solid"};
       --display-gradient: {isTopNeck ? "none" : "block"}'>
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

  .fretboard:before,
  .fretboard:after {
    display: var(--display-gradient);
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    height: 30px;
    background: rgb(1, 32, 48);
    background: linear-gradient(0deg, rgba(1, 32, 48, 1) 20%, rgba(218, 253, 186, 0) 86%);
  }

  .fretboard:before {
    bottom: 100%;
  }

  .fretboard:after {
    top: 100%;
    background: rgb(1,32,48);
    background: linear-gradient(180deg, rgba(1,32,48,1) 20%, rgba(218,253,186,0) 86%);  }
</style>
