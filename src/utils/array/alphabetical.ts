import { isArray } from '../type/typed'

/**
 * sort an array of objects alphabetically based on a getter function and order
 * eg: alphabetical([{ name: 'Alice' }, { name: 'Bob' }], (item) => item.name, 'asc') // returns [{ name: 'Alice' }, { name: 'Bob' }]
 */
export function alphabetical<T>(array: readonly T[], getter: (item: T) => string, order: 'asc' | 'desc' = 'asc'): T[] {
  if (!isArray(array)) {
    return []
  }
  const sorted = [...array].sort((a, b) => {
    return getter(a).toLowerCase().localeCompare(getter(b).toLowerCase())
  })
  if (order === 'desc') {
    return sorted.reverse()
  }
  return sorted
}
