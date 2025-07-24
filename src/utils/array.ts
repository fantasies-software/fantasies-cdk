import { isArray, isFunction } from './typed'

/**
 *  get the first element of an array or return a default value
 *  eg: getFirst([1, 2, 3]) // returns 1
 */
export function getFirst<T>(array: readonly T[], defaultValue?: T): T | null {
  if (array.length && array.length > 0) {
    return array[0]
  }
  if (defaultValue) {
    return defaultValue
  }
  return null
}

/**
 *  get the last element of an array or return a default value
 *  eg: getLast([1, 2, 3]) // returns 3
 */
export function getLast<T>(array: readonly T[], defaultValue?: T): T | null {
  if (array.length && array.length > 0) {
    return array[array.length - 1]
  }
  if (defaultValue) {
    return defaultValue
  }
  return null
}

/**
 *  Converts an array of objects into a record (object) where the keys are derived from each object
 *  eg: objectify([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }], item => item.id, item => item.name)  =>  { '1': 'Alice', '2': 'Bob' }
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

/**
 *  Selects items from an array based on a condition and maps them to a new value.
 *  eg: selectMap([1, 2, 3, 4], item => item > 2, item => item * 2) => [6, 8]
 */
export function selectMap<T>(array: readonly T[], condition: (item: T, index: number) => boolean, mapper: (item: T, index: number) => T): T[] {
  if (!isArray(array)) {
    return []
  }
  if (!isFunction(condition)) {
    return []
  }
  return array.filter(condition).map(mapper)
}
