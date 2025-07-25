/**
 *  Maps the keys of an object using a provided mapping function.
 *  The `mapFunc` is applied to each key-value pair, allowing transformation of keys
 *  while keeping the values unchanged.
 *  eg: mapKeys({ a: 1, b: 2 }, (key, value) => key.toUpperCase()) returns { A: 1, B: 2 }
 */
export function mapKeys<
  TValue,
  TKey extends string | number | symbol,
  TNewKey extends string | number | symbol,
>(obj: Record<TKey, TValue>, mapFunc: (key: TKey, value: TValue) => TNewKey): Record<TNewKey, TValue> {
  const keys = Object.keys(obj) as TKey[]
  if (keys.length === 0) {
    return {} as Record<TNewKey, TValue>
  }
  else {
    return keys.reduce((acc, key) => {
      acc[mapFunc(key as TKey, obj[key])] = obj[key]
      return acc
    }, {} as Record<TNewKey, TValue>)
  }
}
