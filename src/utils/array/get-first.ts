import { isArray } from '../type/typed'

/**
 *  get the first element of an array or return a default value
 *  eg: getFirst([1, 2, 3]) // returns 1
 */
export function getFirst<T>(array: readonly T[], defaultValue?: T): T | null {
  if (!isArray(array)) {
    return null
  }
  if (array.length > 0) {
    return array[0]
  }
  if (defaultValue !== undefined) {
    return defaultValue
  }
  return null
}
