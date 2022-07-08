import { arrayOffset } from './Array.js';
export const allNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

export const getNote = (note, offset) => {
  const noteIndex = allNotes.indexOf(note)
  const reOrdered = arrayOffset(allNotes, noteIndex)
  return reOrdered[offset]
}

export const getMinorThird = (note) => {
  return getNote(note, 3)
}

export const getThird = (note) => {
  return getNote(note, 4)
}

export const getFifth = (note) => {
  return getNote(note, 7)
}

export const getDiminishedFifth = (note) => {
  return getNote(note, 6)
}

export const getNotesFromStrings = (items) => items.map((item, index) => {
  const num = parseInt(item, 10)
  const note = {
    stringIndex: index,
    noteLabel: item,
    isMuted: item === 'X',
    noteNumber: -1,
  }
  if (!Number.isNaN(num)) {
    note.noteNumber = num
  }
  return note
})

export const getRange = (arr) => {
  const nums = []
  arr.forEach((el) => {
    if (el.noteNumber !== -1) nums.push(el.noteNumber)
  })
  return {
    min: Math.min(...nums),
    max: Math.max(...nums),
  }
}
