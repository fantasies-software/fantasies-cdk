/**
 *  map-values applies a function to each value in an object and returns a new object with the same keys but transformed values
 *  eg: mapValues({ a: 1, b: 2 }, (value, key) => value * 2) returns { a: 2, b: 4 }
 */
export function mapValues<
  TValue,
  TKey extends string | number | symbol,
  TNewValue,
>(obj: Record<TKey, TValue>, mapFunc: (value: TValue, key: TKey) => TNewValue): Record<TKey, TNewValue> {
  const keys = Object.keys(obj) as TKey[]
  if (keys.length === 0) {
    return {} as Record<TKey, TNewValue>
  }
  else {
    return keys.reduce((acc, key) => {
      acc[key] = mapFunc(obj[key], key)
      return acc
    }, {} as Record<TKey, TNewValue>)
  }
}
