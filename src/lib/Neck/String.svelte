<script>
  import { neck } from '../utils/Neck.js'

  export let muted, showNotes = false
  export let note = 0
  export let noteIndex = 0
  export let modifier = 0
  export let chord
</script>

{#if muted}
  <div class='string muted flex-center' style='--top-factor: -1'>X</div>
{:else if showNotes}
  <div
    class={
              neck[noteIndex][note] === chord.rootNote
              ? 'string flex-center root'
              : neck[noteIndex][note] === chord.third
              ? 'string flex-center third'
              : neck[noteIndex][note] === chord.fifth
              ? 'string flex-center fifth'
              : 'string flex-center '
            }
    style='--top-factor: {note - modifier}'>
    {neck[noteIndex][note]}
  </div>
{:else}
  <div class='string flex-center' style='--top-factor: {note - modifier}'>
    {note}
  </div>
{/if}


<style>
  .string {
    --top: calc(var(--top-factor) * var(--string-width));
    cursor: pointer;
    position: absolute;
    top: var(--top);
    width: var(--string-width);
    height: var(--string-width);
    background-color: gray;
    border-radius: 50%;
    transition: all 200ms ease;
    transform: translateY(-1px) scale(.8);
    transform-origin: center center;
    z-index: 10;
    font-weight: 700;
  }

  .string:hover {
    transform: translateY(-1px) scale(1.1);
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

  .string.muted {
    background-color: darkslategrey;
  }

  .string:nth-of-type(2) {
    left: var(--string-width);
  }

  .string:nth-of-type(3) {
    left: calc(var(--width) / 6 * 2);
  }

  .string:nth-of-type(4) {
    left: calc(var(--width) / 6 * 3);
  }

  .string:nth-of-type(5) {
    left: calc(var(--width) / 6 * 4);
  }

  .string:nth-of-type(6) {
    left: calc(var(--width) / 6 * 5);
  }
</style>
