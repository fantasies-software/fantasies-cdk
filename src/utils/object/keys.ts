import { isArray, isObject } from '../typed'

/**
 * Recursively retrieves all keys from an object, including nested objects and arrays.
 * The keys are returned as a flat array of strings, representing the path to each key.
 * eg: keys({ a: { b: { c: 1 } }, d: [2, 3] }) returns ['a.b.c', 'd.0', 'd.1'].
 */
export function keys<TValue extends object>(value: TValue): string[] {
  if (!value) {
    return []
  }
  const getKeys = (nested: any, paths: string[]): string[] => {
    if (isObject(nested)) {
      return Object.entries(nested).flatMap(([k, v]) => getKeys(v, [...paths, k]))
    }
    if (isArray(nested)) {
      return nested.flatMap((item, i) => getKeys(item, [...paths, `${i}`]))
    }
    return [paths.join('.')]
  }
  return getKeys(value, [])
}
