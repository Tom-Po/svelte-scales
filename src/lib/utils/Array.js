export const arrayOffset = (arr, offset) => {
  return [...arr.slice(offset), ...arr.slice(0, offset)]
}
