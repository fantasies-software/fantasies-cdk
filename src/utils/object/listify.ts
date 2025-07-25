/**
 *  Converts an object into a list of items based on a transformation function.
 *  Each item in the resulting list is created by applying the `toItem` function
 *  to each key-value pair in the object.
 *  eg: listify({ a: 1, b: 2 }, (key, value) => ({ key, value })) returns [{ key: 'a', value: 1 }, { key: 'b', value: 2 }].
 */
export function listify<TValue, TKey extends string | number | symbol, KResult>(obj: Record<TKey, TValue>, toItem: (key: TKey, value: TValue) => KResult) {
  if (!obj) {
    return []
  }
  const entries = Object.entries(obj)
  if (entries.length === 0) {
    return []
  }
  return entries.reduce((acc, entry) => {
    acc.push(toItem(entry[0] as TKey, entry[1] as TValue))
    return acc
  }, [] as KResult[])
}
