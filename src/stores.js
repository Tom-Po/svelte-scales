import { writable } from 'svelte/store'

export const majorRootNotes = writable(['A', 'E', 'B', 'Gb/F#', 'Db', 'Ab', 'Eb', 'Bb', 'F', 'C', 'G', 'D'])
export const minorRootNotes = writable(['F#', 'C#', 'G#', 'Eb/D#', 'Bb', 'F', 'C', 'G', 'D', 'A', 'E', 'B'])

export const chords = writable([
  {
    chordName: 'Amaj7',
    strings: 'X 0 2 1 2 X',
  },
  {
    chordName: 'Cmaj7',
    strings: 'X 3 5 4 5 X',
  },
])


// TODO, optimize offset
const eLowString = ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E']
const aString = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'E', 'F', 'F#', 'G', 'G#', 'A']
const dString = ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D']
const gString = ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G']
const bString = ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const eString = eLowString

export const neck = writable([
  eString,
  aString,
  dString,
  gString,
  bString,
  eString
])
