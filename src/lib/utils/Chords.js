import { getDiminishedFifth, getFifth, getMinorThird, getThird } from './Notes.js'

export const defaultChords = [
  {
    chordName: 'Em',
    rootNote: 'E',
    third: 'G',
    fifth: 'B',
    strings: '0,2,2,0,0,0',
  },
]

export const getChord = (chord) => {
  const rootNote = chord.chordName.charAt(0)
  return {
    ...chord,
    rootNote,
    third: chord.chordName.includes('m') ? getMinorThird(rootNote) : getThird(rootNote),
    fifth: chord.chordName.includes('dim' || 'b5') ? getDiminishedFifth(rootNote) : getFifth(rootNote),
  }
}
