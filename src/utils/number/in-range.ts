/**
 *  inRange checks if a number is within a specified range.
 *  eg: inRange(2, 5) returns true because 2 is in the range [0, 5)
 *  eg: inRange(2, 1, 5) returns true because 2 is in the range [1, 5)
 */
export function inRange(number: number, end: number): boolean
export function inRange(number: number, start: number, end?: number): boolean {
  const isTypeSafe
    = typeof number === 'number'
      && typeof start === 'number'
      && (typeof end === 'undefined' || typeof end === 'number')

  if (!isTypeSafe) {
    return false
  }

  if (typeof end === 'undefined') {
    end = start
    start = 0
  }

  return number >= Math.min(start, end) && number < Math.max(start, end)
}
