import { isArray, isFunction } from '../typed'

/**
 *  Selects items from an array based on a condition and maps them to a new value.
 *  eg: selectMap([1, 2, 3, 4], item => item > 2, item => item * 2) => [6, 8]
 */
export function selectMap<T>(array: readonly T[], condition: (item: T, index: number) => boolean, mapper: (item: T, index: number) => T): T[] {
  if (!isArray(array)) {
    return []
  }
  if (!isFunction(condition)) {
    return []
  }
  return array.filter(condition).map(mapper)
}
