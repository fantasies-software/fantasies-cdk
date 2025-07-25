import { isArray } from '../type/typed'

/**
 *  Compares elements in an array using a provided comparison function
 * eg: boil([1, 5, 3, 9, 2], (a, b) => a > b ? a : b) => 9
 */
export function boil<T>(array: readonly T[], compare: (pre: T, next: T) => T): T | null {
  if (!isArray(array) || array.length === 0) {
    return null
  }
  return (array as T[]).reduce((pre, next) => compare(pre, next))
}
