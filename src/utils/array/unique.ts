
/**
 *  Removes duplicate items from an array based on a key function.
 *  eg: unique([{ id: 1 }, { id: 2 }, { id: 1 }], item => item.id) => returns [{ id: 1 }, { id: 2 }]
 */
export function unique<T, K extends string | number | symbol>(array: readonly T[], toKey?: (item: T) => K): T[] {
  const valueMap = array.reduce((acc, item) => {
    const key = toKey ? toKey(item) : (item as any as string | number | symbol)
    if (acc[key]) {
      return acc
    }
    acc[key] = item
    return acc
  }, {} as Record<string | number | symbol, T>)
  return Object.values(valueMap)
}
