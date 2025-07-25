import { isArray, isFunction } from './typed'

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
 *  Converts an array of objects into a record (object) where the keys are derived from each object
 *  eg: objectify([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }], item => item.id, item => item.name)  =>  { '1': 'Alice', '2': 'Bob' }
 */
export function toDic<T, Key extends string | number | symbol, Value = T>(
  array: readonly T[],
  getKey: (item: T) => Key,
  getValue: (item: T) => Value = item => item as unknown as Value,
): Record<Key, Value> {
  if (!isArray(array)) {
    return {} as Record<Key, Value>
  }
  if (!isFunction(getKey) || !isFunction(getValue)) {
    return {} as Record<Key, Value>
  }
  return array.reduce((acc, item) => {
    const key = getKey(item)
    const value = getValue(item)
    acc[key] = value
    return acc
  }, {} as Record<Key, Value>)
}

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

/**
 *  sum function to calculate the sum of an array of numbers or objects.
 *  eg:  sum([1, 2, 3]) // returns 6
 *  eg:  sum([{ value: 1 }, { value: 2 }, { value: 3 }], item => item.value) // returns 6
 */
export function sum<T extends number>(array: readonly T[]): number
export function sum<T extends object>(array: readonly T[], selector: (item: T) => number): number
export function sum<T>(array: readonly T[], selector?: (item: T) => number): number {
  if (!array || array.length === 0) {
    return 0
  }
  if (selector) {
    return array.reduce((acc, item) => acc + selector(item), 0)
  }
  return array.reduce((acc, item) => acc + (item as unknown as number), 0)
}

/**
 *  Finds the maximum value in an array of numbers or objects.
 *  eg: max([1, 2, 3]) // returns 3
 *  eg: max([{ value: 1 }, { value: 2 }, { value: 3 }], item => item.value) => returns { value: 3 }
 */
export function max(array: readonly [number, ...number[]]): number
export function max(array: readonly number[]): number | null
export function max<T>(array: readonly T[], getter: (item: T) => number): T | null
export function max<T>(array: readonly T[], getter?: (item: T) => number): T | null {
  if (!getter) {
    getter = item => item as unknown as number
  }
  return boil(array, (pre, next) => getter(pre) > getter(next) ? pre : next)
}

/**
 *  Finds the minimum value in an array of numbers or objects.
 *  eg: min([1, 2, 3]) // returns 1
 *  eg: min([{ value: 1 }, { value: 2 }, { value: 3 }], item => item.value) => returns { value: 1 }
 */
export function min(array: readonly [number, ...number[]]): number
export function min(array: readonly number[]): number | null
export function min<T>(array: readonly T[], getter: (item: T) => number): T | null
export function min<T>(array: readonly T[], getter?: (item: T) => number): T | null {
  if (!getter) {
    getter = item => item as unknown as number
  }
  return boil(array, (pre, next) => getter(pre) < getter(next) ? pre : next)
}

/**
 *  Clusters an array into smaller arrays of a specified size.
 *  eg: cluster([1, 2, 3, 4, 5, 6], 2) => [[1, 2], [3, 4], [5, 6]]
 *  eg: cluster([1, 2, 3], 2) => [[1, 2], [3]]
 */
export function cluster<T>(array: readonly T[], size: number): T[][] {
  const clusterCount = Math.ceil(array.length / size)
  return Array.from({ length: clusterCount }, (_, i) => {
    const start = i * size
    return array.slice(start, start + size)
  })
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

/**
 * Replaces all occurrences of an item in an array with a specified item based on a matching function.
 * eg: replaceAllArrayByItem([1, 2, 3, 2, 4], 0, (item) => item === 2) => [1, 0, 3, 0, 4]
 */
export function replaceAllArrayByItem<T>(array: readonly T[], item: T, match: (item: T, index: number) => boolean): T[] {
  if (!isArray(array)) {
    return []
  }
  if (item === undefined || item === null) {
    return [...array]
  }
  return [...array].map((current, index) => {
    if (match(current, index)) {
      return item
    }
    return current
  })
}

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

/**
 * Groups an array of items by a specified key.
 * eg: groupBy([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Alice' }], item => item.name) // returns { Alice: [{ id: 1, name: 'Alice' }, { id: 3, name: 'Alice' }], Bob: [{ id: 2, name: 'Bob' }] }
 */
export function groupBy<T, K extends string | number | symbol>(array: readonly T[], by: (item: T) => K | undefined): Record<K, T[]> {
  return array.reduce((acc, item) => {
    const key = by(item)
    if (!key) {
      return acc
    }
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(item)
    return acc
  }, {} as Record<K, T[]>)
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
 * Combines multiple arrays into an array of arrays, where each inner array contains elements from the input arrays at the same index.
 * eg:  const zipped = zipAll(['a', 'b'], [1, 2], [true, false]) // [['a', 1, true], ['b', 2, false]]
 */
export function zipToArray<T1, T2>(array1: T1[], array2: T2[]): [T1, T2][]
export function zipToArray<T1, T2, T3>(array1: T1[], array2: T2[], array3: T3[]): [T1, T2, T3][]
export function zipToArray<T1, T2, T3, T4>(array1: T1[], array2: T2[], array3: T3[], array4: T4[]): [T1, T2, T3, T4][]
export function zipToArray<T1, T2, T3, T4, T5>(array1: T1[], array2: T2[], array3: T3[], array4: T4[], array5: T5[]): [T1, T2, T3, T4, T5][]
export function zipToArray<T1, T2, T3, T4, T5, T6>(array1: T1[], array2: T2[], array3: T3[], array4: T4[], array5: T5[], array6: T6[]): [T1, T2, T3, T4, T5, T6][]
export function zipToArray<T1, T2, T3, T4, T5, T6, T7>(array1: T1[], array2: T2[], array3: T3[], array4: T4[], array5: T5[], array6: T6[], array7: T7[]): [T1, T2, T3, T4, T5, T6, T7][]
export function zipToArray<T1, T2, T3, T4, T5, T6, T7, T8>(array1: T1[], array2: T2[], array3: T3[], array4: T4[], array5: T5[], array6: T6[], array7: T7[], array8: T8[]): [T1, T2, T3, T4, T5, T6, T7, T8][]
export function zipToArray<T1, T2, T3, T4, T5, T6, T7, T8, T9>(array1: T1[], array2: T2[], array3: T3[], array4: T4[], array5: T5[], array6: T6[], array7: T7[], array8: T8[], array9: T9[]): [T1, T2, T3, T4, T5, T6, T7, T8, T9][]
export function zipToArray<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(array1: T1[], array2: T2[], array3: T3[], array4: T4[], array5: T5[], array6: T6[], array7: T7[], array8: T8[], array9: T9[], array10: T10[]): [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10][]
export function zipToArray<T>(...arrays: readonly T[][]): T[][] {
  if (!arrays || !arrays.length) {
    return []
  }
  return Array.from({ length: Math.max(...arrays.map(({ length }) => length)) })
    .fill([])
    .map((_, index) => arrays.map(array => array[index]))
}

/**
 * Combines keys and values into an object, where each key is associated with a value.
 * eg: zipToObject(['a', 'b'], [1, 2]) // { a: 1, b: 2 }
 */
export function zipToObject<Key extends string | number | symbol, Val>(
  keys: Key[],
  values: Val | Val[] | ((key: Key, idx: number) => Val),
): Record<Key, Val> {
  if (!keys || !keys.length) {
    return {} as Record<Key, Val>
  }

  let getVal: (key: Key, idx: number) => Val
  if (isFunction(values)) {
    getVal = values as (key: Key, idx: number) => Val
  }
  else if (isArray(values)) {
    getVal = (_key: Key, index: number) => (values as Val[])[index]
  }
  else {
    getVal = (_key: Key, _index: number) => values as Val
  }

  return keys.reduce((acc, key, index) => {
    acc[key] = getVal(key, index)
    return acc
  }, {} as Record<Key, Val>)
}
