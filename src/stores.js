import { writable } from 'svelte/store'
import chordFile from './assets/output.json'

export const majorRootNotes = writable(['A', 'E', 'B', 'Gb/F#', 'Db', 'Ab', 'Eb', 'Bb', 'F', 'C', 'G', 'D'])
export const minorRootNotes = writable(['F#', 'C#', 'G#', 'Eb/D#', 'Bb', 'F', 'C', 'G', 'D', 'A', 'E', 'B'])

export const chords = writable(chordFile)
