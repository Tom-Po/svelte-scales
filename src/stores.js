import { writable } from 'svelte/store'
import chordFile from './assets/output.json'

export const majorRootNotes = writable(['A', 'E', 'B', 'Gb/F#', 'Db', 'Ab', 'Eb', 'Bb', 'F', 'C', 'G', 'D'])
export const minorRootNotes = writable(['F#', 'C#', 'G#', 'Eb/D#', 'Bb', 'F', 'C', 'G', 'D', 'A', 'E', 'B'])

export const chords = writable(chordFile)


// TODO, optimize offset

const arrayOffset = (arr, offset) => {
  return [...arr.slice(offset), ...arr.slice(0, offset)]
}
const eLowString = ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E']
const aString = arrayOffset(eLowString, 5)
const dString = arrayOffset(eLowString, -2)
const gString = arrayOffset(eLowString, 3)
const bString = arrayOffset(eLowString, 7)
const eString = eLowString

export const neck = writable([
  eString,
  aString,
  dString,
  gString,
  bString,
  eString
])
