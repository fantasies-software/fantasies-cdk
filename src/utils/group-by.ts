/**
 * Groups an array of items by a specified key.
 * @param array  - The array to group
 * @param by  - A function that returns the key to group by
 * @returns - An object where keys are the result of the `by` function and values are arrays of items that correspond to those keys
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
