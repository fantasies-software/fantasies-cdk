import { isArray, isFunction } from './typed'

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
