import { isArray, isFunction } from '../typed'

/**
 * Combines keys and values into an object, where each key is associated with a value.
 * eg: zipToObject(['a', 'b'], [1, 2]) // { a: 1, b: 2 }
 */
export function zipToObject<Key extends string | number | symbol, Val>(
  keys: Key[],
  values: Val | Val[] | ((key: Key, idx: number) => Val),
): Record<Key, Val> {
  if (!isArray(keys)) {
    return {} as Record<Key, Val>
  }

  let getVal: (key: Key, idx: number) => Val
  if (isFunction(values)) {
    getVal = values as (key: Key, idx: number) => Val
  }
  else if (isArray(values)) {
    getVal = (_key: Key, index: number) => (values as Val[])[index]
  }
  else {
    getVal = (_key: Key, _index: number) => values as Val
  }

  return keys.reduce((acc, key, index) => {
    acc[key] = getVal(key, index)
    return acc
  }, {} as Record<Key, Val>)
}
