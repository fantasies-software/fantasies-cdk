import { isArray, isFunction } from '../type/typed'

/**
 *  Converts an array of objects into a record (object) where the keys are derived from each object
 *  eg: toDic([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }], item => item.id, item => item.name)  =>  { '1': 'Alice', '2': 'Bob' }
 */
export function toDic<T, Key extends string | number | symbol, Value = T>(
  array: readonly T[],
  getKey: (item: T) => Key,
  getValue: (item: T) => Value = item => item as unknown as Value,
): Record<Key, Value> {
  if (!isArray(array)) {
    return {} as Record<Key, Value>
  }
  if (!isFunction(getKey) || !isFunction(getValue)) {
    return {} as Record<Key, Value>
  }
  return array.reduce((acc, item) => {
    const key = getKey(item)
    const value = getValue(item)
    acc[key] = value
    return acc
  }, {} as Record<Key, Value>)
}
