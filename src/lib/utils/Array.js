export const arrayOffset = (arr, offset) => {
  return [...arr.slice(offset), ...arr.slice(0, offset)]
}
export const groupByLetter = ((items) => items.reduce((rv, x) => {
  (rv[x.chordName.charAt(0)] = rv[x.chordName.charAt(0)] || []).push(x)
  return rv
}, {}))
