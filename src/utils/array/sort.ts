import { isArray } from '../type/typed'

/**
 *  sort an array based on a getter function and order
 *  eg: sort([1, 5, 3, 9, 2], item => item, 'asc') // returns [1, 2, 3 , 5, 9]
 */
export function sort<T>(array: readonly T[], getter: (item: T) => number, order: 'asc' | 'desc' = 'asc'): T[] {
  if (!isArray(array)) {
    return []
  }
  const sorted = [...array].sort((a, b) => getter(a) - getter(b))
  if (order === 'desc') {
    return sorted.reverse()
  }
  else {
    return sorted
  }
}
