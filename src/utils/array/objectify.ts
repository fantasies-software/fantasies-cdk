/**
 *  Transforms an array into an object using specified key and value extraction functions.
 *  The keys are derived from the items in the array, and the values can be customized
 *  using a provided function. If no value function is provided, the item itself is used as the value.
 *  eg: objectify([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }], item => item.id, item => item.name) returns { '1': 'Alice', '2': 'Bob' }.
 */
export function objectify<T, Key extends string | number | symbol, Value = T>(array: readonly T[], getKey: (item: T) => Key, getValue: (item: T) => Value = item => item as unknown as Value): Record<Key, Value> {
  return array.reduce((acc, item) => {
    acc[getKey(item)] = getValue(item)
    return acc
  }, {} as Record<Key, Value>)
}
