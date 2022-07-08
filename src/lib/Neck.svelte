<script>
  import {
    getNotesFromStrings,
    getRange,
  } from './utils/Notes.js'
  import { neck } from './utils/Neck.js'
  import { defaultChords, getChord } from './utils/Chords.js'
  import Frets from './Frets.svelte'

  export let chord = defaultChords[0]

  let showNotes = false
  const strings = chord.strings.split(',')

  chord = getChord(chord)

  const notes = getNotesFromStrings(strings)

  // Get lowest and highest notes
  const range = getRange(notes)

  const isTopNeck = range.min === 0
  // Make notes appear before first fret
  // When lowest is 0
  const upperNeckModifier = isTopNeck ? -1 : 0

  // Number of frets to display
  // Difference between highest and lowest added modifier if lowest is 0
  const fretCount = range.max - range.min + upperNeckModifier;

  // Get Height of fretboard
  const fretboardHeight = fretCount + 1

</script>

<div class='neck'>
  <label>
    <input type='checkbox' bind:checked={showNotes}>
    <span>Show  {showNotes ? 'Fingering' : 'Notes'}</span>
  </label>
  <div class='indicator' class:muted={!showNotes}>
    <div class='root'>Root {chord.rootNote}</div>
    <div class='third'>Third {chord.third}</div>
    <div class='fifth'>Fifth {chord.fifth}</div>
  </div>
  <div class='fretboard'
       style='
       --height: {fretboardHeight};
       --fretboard-border: {isTopNeck ? "5px solid" : ""}'>
    {#each notes as string, i}
      {#if string.isMuted}
        <div class='string muted flex-center' style='--top-factor: -1'>X</div>
      {:else if showNotes}
        <div
          class={
              neck[i][string.noteNumber] === chord.rootNote
              ? 'string flex-center root'
              : neck[i][string.noteNumber] === chord.third
              ? 'string flex-center third'
              : neck[i][string.noteNumber] === chord.fifth
              ? 'string flex-center fifth'
              : 'string flex-center '
            }
          style='--top-factor: {string.noteNumber - range.min + upperNeckModifier}'>
          {neck[i][string.noteNumber]}
        </div>
      {:else}
        <div class='string flex-center' style='--top-factor: {string.noteNumber - range.min + upperNeckModifier}'>
          {string.noteNumber}
        </div>
      {/if}
    {/each}
    {#each notes as _, i}
      <div class='string-wave' style='--left-factor: {i}'></div>
    {/each}

    <Frets count={fretCount} />
  </div>
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
</div>

<style>
  .neck,
  .fretboard {
    --width: 33vw;
    --string-width: calc(var(--width) / 6);
    --fretboard-border: 0;
  }

  .fretboard {
    border-top: var(--fretboard-border);
    background-color: var(--bg-color);

    position: relative;

    width: var(--width);
    height: calc(var(--height) * var(--string-width));

    margin: 4rem auto 0;
  }

  .string-wave {
    --half-string-wave: calc(var(--string-width) / 2 - 2px);
    --left: calc(var(--left-factor) * var(--string-width) + var(--half-string-wave));
    background-color: var(--accent-color);

    position: absolute;
    bottom: 0;
    top: 0;
    left: var(--left);
    width: 4px;
    opacity: var(--alpha);
  }

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

  .indicator {
    margin: 1rem auto;
    width: 200px;
  }

  .indicator.muted {
    filter: contrast(.3);
  }

  .notes {
    width: var(--width);
    margin: .5rem auto;
  }

  .note-name {
    flex-grow: 1;
    width: calc(var(--width) / 6);
    height: calc(var(--width) / 6);
    border-radius: 50%;
  }

  @media screen and (max-width: 768px) {
    .neck,
    .fretboard {
      --width: 300px;
    }
  }
</style>
