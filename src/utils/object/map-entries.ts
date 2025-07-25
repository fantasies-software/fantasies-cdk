/**
 *  Maps the entries of an object to a new object with potentially different keys and values.
 *  The `toEntry` function is applied to each key-value pair, allowing transformation of
 *  keys and values.
 *  eg: mapEntries({ a: 1, b: 2 }, (key, value) => [key.toUpperCase(), value * 2]) returns { A: 2, B: 4 }
 */
export function mapEntries<
  TKey extends string | number | symbol,
  TValue,
  TNewKey extends string | number | symbol,
  TNewValue,
>(obj: Record<TKey, TValue>, toEntry: (key: TKey, value: TValue) => [TNewKey, TNewValue]): Record<TNewKey, TNewValue> {
  if (!obj) {
    return {} as Record<TNewKey, TNewValue>
  }
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const [newKey, newValue] = toEntry(key as TKey, value as TValue)
    acc[newKey] = newValue
    return acc
  }, {} as Record<TNewKey, TNewValue>)
}
