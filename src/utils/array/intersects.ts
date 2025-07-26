import { isArray } from '../type/typed'
import { toDic } from './to-dic'

/**
 * Checks if two arrays intersect based on a primary key function.
 * eg: intersects([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }], item => item.id) => returns true
 * eg: intersects([1, 2, 3], [3, 4, 5]) => returns true
 * eg: intersects([1, 2, 3], [4, 5, 6]) => returns false
 */
export function intersects<T, K extends string | number | symbol>(
  array1: readonly T[],
  array2: readonly T[],
  primaryKey?: (item: T) => K,
): boolean {
  if (!isArray(array1) || !isArray(array2)) {
    return false
  }
  let primaryKeyFn: (item: T) => K
  if (primaryKey) {
    primaryKeyFn = primaryKey
  }
  else {
    primaryKeyFn = item => item as unknown as K
  }
  const dicA = toDic(array1, primaryKeyFn)
  return array2.some((item) => {
    const key = primaryKeyFn(item)
    return dicA[key] !== undefined
  })
}
