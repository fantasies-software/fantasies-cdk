import { isArray } from '../typed'

/**
 * Replaces all occurrences of an item in an array with a specified item based on a matching function.
 * eg: replaceAllArrayByItem([1, 2, 3, 2, 4], 0, (item) => item === 2) => [1, 0, 3, 0, 4]
 */
export function replaceAllArrayByItem<T>(array: readonly T[], item: T, match: (item: T, index: number) => boolean): T[] {
  if (!isArray(array)) {
    return []
  }
  if (item === undefined || item === null) {
    return [...array]
  }
  return [...array].map((current, index) => {
    if (match(current, index)) {
      return item
    }
    return current
  })
}
