import { isArray } from './typed'

/**
 *  get the first element of an array or return a default value
 *  eg: getFirst([1, 2, 3]) // returns 1
 */
export function getFirst<T>(array: readonly T[], defaultValue?: T): T | null {
  if (array.length && array.length > 0) {
    return array[0]
  }
  if (defaultValue) {
    return defaultValue
  }
  return null
}

/**
 *  get the last element of an array or return a default value
 *  eg: getLast([1, 2, 3]) // returns 3
 */
export function getLast<T>(array: readonly T[], defaultValue?: T): T | null {
  if (array.length && array.length > 0) {
    return array[array.length - 1]
  }
  if (defaultValue) {
    return defaultValue
  }
  return null
}

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

/**
 *  count the occurrences of each item in an array based on a key
 *  eg: countBy([{ name: 'Alice' }, { name: 'Bob' }, { name: 'Alice' }], (item)=>item.name) // returns { Alice: 2, Bob: 1 }
 */
export function countBy<T, Key extends string | number | symbol>(array: readonly T[], getKey: (item: T) => Key): Record<Key, number> {
  if (!isArray(array)) {
    return {} as Record<Key, number>
  }
  return array.reduce((obj, item) => {
    const key = getKey(item)
    obj[key] = (obj[key] || 0) + 1
    return obj
  }, {} as Record<Key, number>)
}
