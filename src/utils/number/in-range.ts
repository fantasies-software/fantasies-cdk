/**
 *  inRange checks if a number is within a specified range.
 *  eg: inRange(2, 5) returns true because 2 is in the range [0, 5)
 *  eg: inRange(2, 1, 5) returns true because 2 is in the range [1, 5)
 */
export function inRange(number: number, end: number): boolean
export function inRange(number: number, start: number, end: number): boolean
export function inRange(number: number, startOrEnd: number, end?: number): boolean {
  if (typeof number !== 'number' || typeof startOrEnd !== 'number' || (typeof end !== 'undefined' && typeof end !== 'number')) {
    return false
  }
  let start: number
  let realEnd: number
  if (typeof end === 'undefined') {
    realEnd = startOrEnd
    start = 0
  }
  else {
    start = startOrEnd
    realEnd = end
  }
  const min = Math.min(start, realEnd)
  const max = Math.max(start, realEnd)
  if (number >= min && number < max) {
    return true
  }
  return false
}
