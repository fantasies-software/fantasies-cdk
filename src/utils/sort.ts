import { isArray } from './typed'

/**
 *  sort an array based on a getter function and order
 *  eg: sort([1, 5, 3, 9, 2], item => item, 'asc') // returns [1, 2, 3 , 5, 9]
 */
export function sort<T>(array: readonly T[], getter: (item: T) => number, order: 'asc' | 'desc' = 'asc'): T[] {
  if (!isArray(array)) {
    return []
  }
  const sorted = [...array].sort((a, b) => getter(a) - getter(b))
  return order === 'desc' ? sorted.reverse() : sorted
}

/**
 * sort an array of objects alphabetically based on a getter function and order
 * eg: alphabetical([{ name: 'Alice' }, { name: 'Bob' }], (item) => item.name, 'asc') // returns [{ name: 'Alice' }, { name: 'Bob' }]
 */
export function alphabetical<T>(array: readonly T[], getter: (item: T) => string, order: 'asc' | 'desc' = 'asc'): T[] {
  if (!array) {
    return []
  }
  const sorted = [...array].sort((a, b) => {
    return getter(a).toLowerCase().localeCompare(getter(b).toLowerCase())
  })
  return order === 'desc' ? sorted.reverse() : sorted
}
