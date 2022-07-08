import { arrayOffset } from './Array.js'
import { allNotes } from './Notes.js'

const eLowString = arrayOffset(allNotes, 4)
const aString = arrayOffset(allNotes, 9)
const dString = arrayOffset(allNotes, 2)
const gString = arrayOffset(allNotes, 7)
const bString = arrayOffset(allNotes, -1)

export default [
  eLowString,
  aString,
  dString,
  gString,
  bString,
  eLowString
]

