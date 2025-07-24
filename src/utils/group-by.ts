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
