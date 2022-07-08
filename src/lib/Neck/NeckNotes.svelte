<script>
  import { defaultChords } from '../utils/Chords.js'
  import { neck } from '../utils/Neck.js'

  export let notes = []
  export let chord = defaultChords[0]

</script>

<div class='notes flex-center'>
  {#each notes as string, i}
    <div
      class={
              neck[i][string.noteNumber] === chord.rootNote
              ? 'note-name flex-center root'
              : neck[i][string.noteNumber] === chord.third
              ? 'note-name flex-center third'
              : neck[i][string.noteNumber] === chord.fifth
              ? 'note-name flex-center fifth'
              : 'note-name flex-center'
            }
    >{neck[i][string.noteNumber] ?? 'X'}</div>
  {/each}
</div>

<style>

  .notes {
    width: var(--width);
    margin: .5rem auto;
  }

  .note-name {
    flex-grow: 1;
    width: calc(var(--width) / 6);
    height: calc(var(--width) / 6);
    border-radius: 50%;
    background: none;
    font-weight: 700;
  }

  .note-name.root {
    color: orangered;
  }
  .note-name.third {
    color: var(--bg-color)
  }
  .note-name.fifth {
    color: var(--bg-light-color);
  }

</style>
