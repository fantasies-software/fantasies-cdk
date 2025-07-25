/**
 *  Flattens an array of arrays into a single array.
 *  eg: flat([[1, 2], [3, 4], [5, 6]]) // returns [1, 2, 3, 4, 5, 6]
 */
export function flat<T>(array: readonly T[][]): T[] {
  return array.reduce((acc, list) => {
    acc.push(...list)
    return acc
  }, [])
}
