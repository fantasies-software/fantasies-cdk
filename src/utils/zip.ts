/**
 * Combines multiple arrays into an array of arrays, where each inner array contains elements from the input arrays at the same index.
 * eg:  const zipped = zipAll(['a', 'b'], [1, 2], [true, false]) // [['a', 1, true], ['b', 2, false]]
 */
export function zipAll<T1, T2>(array1: T1[], array2: T2[]): [T1, T2][]
export function zipAll<T1, T2, T3>(array1: T1[], array2: T2[], array3: T3[]): [T1, T2, T3][]
export function zipAll<T1, T2, T3, T4>(array1: T1[], array2: T2[], array3: T3[], array4: T4[]): [T1, T2, T3, T4][]
export function zipAll<T1, T2, T3, T4, T5>(array1: T1[], array2: T2[], array3: T3[], array4: T4[], array5: T5[]): [T1, T2, T3, T4, T5][]
export function zipAll<T1, T2, T3, T4, T5, T6>(array1: T1[], array2: T2[], array3: T3[], array4: T4[], array5: T5[], array6: T6[]): [T1, T2, T3, T4, T5, T6][]
export function zipAll<T1, T2, T3, T4, T5, T6, T7>(array1: T1[], array2: T2[], array3: T3[], array4: T4[], array5: T5[], array6: T6[], array7: T7[]): [T1, T2, T3, T4, T5, T6, T7][]
export function zipAll<T1, T2, T3, T4, T5, T6, T7, T8>(array1: T1[], array2: T2[], array3: T3[], array4: T4[], array5: T5[], array6: T6[], array7: T7[], array8: T8[]): [T1, T2, T3, T4, T5, T6, T7, T8][]
export function zipAll<T1, T2, T3, T4, T5, T6, T7, T8, T9>(array1: T1[], array2: T2[], array3: T3[], array4: T4[], array5: T5[], array6: T6[], array7: T7[], array8: T8[], array9: T9[]): [T1, T2, T3, T4, T5, T6, T7, T8, T9][]
export function zipAll<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(array1: T1[], array2: T2[], array3: T3[], array4: T4[], array5: T5[], array6: T6[], array7: T7[], array8: T8[], array9: T9[], array10: T10[]): [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10][]
export function zipAll<T>(...arrays: readonly T[][]): T[][] {
  if (!arrays || !arrays.length) {
    return []
  }
  return Array.from({ length: Math.max(...arrays.map(({ length }) => length)) })
    .fill([])
    .map((_, index) => arrays.map(array => array[index]))
}
