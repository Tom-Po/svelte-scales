<script>
  import {
    getNotesFromStrings,
    getRange,
  } from './utils/Notes.js'
  import { defaultChords, getChord } from './utils/Chords.js'
  import Frets from './Frets.svelte'
  import NeckNotes from './Neck/NeckNotes.svelte'
  import Indicator from './Neck/Indicator.svelte'
  import Fretboard from './Neck/Fretboard.svelte'
  import String from './Neck/String.svelte'

  export let chord = defaultChords[0]

  let showNotes = true

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
  const fretCount = range.max - range.min + upperNeckModifier

  // Get Height of fretboard
  const fretboardHeight = fretCount + 1

</script>

<div class='neck'>
  <label>
    <input type='checkbox' bind:checked={showNotes}>
    <span>Show  {showNotes ? 'Fingering' : 'Notes'}</span>
  </label>
  <Indicator muted={!showNotes} chord={chord} />
  <Fretboard --height='{fretboardHeight}' isTopNeck={isTopNeck}>
    {#each notes as string, i}
      <String
        muted={string.isMuted}
        chord={chord}
        modifier={range.min - upperNeckModifier}
        noteIndex={i}
        note={string.noteNumber}
        showNotes={showNotes}
      />
    {/each}
    {#each notes as note, i}
      <div class='string-wave' class:muted={note.isMuted} style='--left-factor: {i}'></div>
    {/each}
    <Frets count={fretCount} />
  </Fretboard>
  <NeckNotes notes={notes} chord={chord} />
</div>

<style>
  .neck {
    --width: 33vw;
    --string-width: calc(var(--width) / 6);
    --fretboard-border: 0;
  }

  .string-wave {
    --half-string-wave: calc(var(--string-width) / 2 - 2px);
    --left: calc(var(--left-factor) * var(--string-width) + var(--half-string-wave));
    background-color: var(--accent-color);

    position: absolute;
    bottom: -10px;
    top: -10px;
    left: var(--left);
    width: 4px;
    opacity: var(--alpha);
    z-index: 9;
  }

  .string-wave.muted {
    opacity: .25;
  }

  @media screen and (max-width: 768px) {
    .neck {
      --width: 300px;
    }
  }
</style>
