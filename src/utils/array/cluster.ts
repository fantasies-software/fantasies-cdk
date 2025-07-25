import { isArray } from '../typed'

/**
 *  Clusters an array into smaller arrays of a specified size.
 *  eg: cluster([1, 2, 3, 4, 5, 6], 2) => [[1, 2], [3, 4], [5, 6]]
 *  eg: cluster([1, 2, 3], 2) => [[1, 2], [3]]
 */
export function cluster<T>(array: readonly T[], size: number): T[][] {
  if (size <= 0 || !isArray(array)) {
    return []
  }
  const clusterCount = Math.ceil(array.length / size)
  return Array.from({ length: clusterCount })
    .fill(null)
    .map((_v, i: number) => {
      return array.slice(i * size, i * size + size)
    })
}
