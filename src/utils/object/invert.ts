/**
 * invert an object, swapping its keys and values.
 * eg: invert({ a: 1, b: 2 }) returns { 1: 'a', 2: 'b' }
 */
export function invert<
  TKey extends string | number | symbol,
  TValue extends string | number | symbol,
>(obj: Record<TKey, TValue>): Record<TValue, TKey> {
  if (!obj) {
    return {} as Record<TValue, TKey>
  }
  else {
    const keys = Object.keys(obj) as TKey[]
    return keys.reduce((acc, key) => {
      acc[obj[key]] = key
      return acc
    }, {} as Record<TValue, TKey>)
  }
}
