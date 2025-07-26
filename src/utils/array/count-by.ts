import { isArray } from '../type/typed'

/**
 *  count the occurrences of each item in an array based on a key
 *  eg: countBy([{ name: 'Alice' }, { name: 'Bob' }, { name: 'Alice' }], (item)=>item.name) // returns { Alice: 2, Bob: 1 }
 */
export function countBy<T, Key extends string | number | symbol>(array: readonly T[], getKey: (item: T) => Key): Record<Key, number> {
  if (!isArray(array)) {
    return {} as Record<Key, number>
  }
  return array.reduce((obj, item) => {
    const key = getKey(item)
    obj[key] = (obj[key] || 0) + 1
    return obj
  }, {} as Record<Key, number>)
}
