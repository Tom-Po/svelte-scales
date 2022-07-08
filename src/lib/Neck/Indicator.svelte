<script>
  export let muted;
  export let chord;
</script>

<div class='indicator' class:muted={muted}>
  <div class='root'>Root {chord.rootNote}</div>
  <div class='third'>Third {chord.third}</div>
  <div class='fifth'>Fifth {chord.fifth}</div>
</div>

<style>
  .indicator {
    margin: 1rem auto;
    width: 200px;
  }

  .indicator.muted {
    filter: contrast(.3);
  }


  .root {
    background-color: orangered;
  }

  .third {
    background-color: var(--contrast-color);
  }

  .fifth {
    background-color: var(--bg-light-color);
  }
</style>
