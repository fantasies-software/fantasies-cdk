import { isArray } from '../typed'

/**
 *  Replaces the first occurrence of an item in an array with a specified item based on a matching function.
 *  eg: replaceArrayByItem([1, 2, 3, 2, 4], 0, (item) => item === 2) => [1, 0, 3, 2, 4]
 */
export function replaceArrayByItem<T>(array: readonly T[], item: T, match: (item: T, index: number) => boolean): T[] {
  if (!isArray(array)) {
    return []
  }
  if (item === undefined || item === null) {
    return [...array]
  }
  for (let i = 0; i < array.length; i++) {
    const _item = array[i]
    if (match(_item, i)) {
      return [...array.slice(0, i), item, ...array.slice(i + 1)]
    }
  }
  return [...array]
}
