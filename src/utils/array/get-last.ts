import { isArray } from '../type/typed'

/**
 *  get the last element of an array or return a default value
 *  eg: getLast([1, 2, 3]) // returns 3
 */
export function getLast<T>(array: readonly T[], defaultValue?: T): T | null {
  if (!isArray(array)) {
    return null
  }
  if (array.length && array.length > 0) {
    return array[array.length - 1]
  }
  if (defaultValue) {
    return defaultValue
  }
  return null
}
