/**
 *  Omit properties from an object.
 *  Creates a new object with all properties of the original object except those specified in the keys
 *  eg: omit({ a: 1, b: 2, c: 3 }, ['a', 'c']) returns { b: 2 }.
 */
export function omit<T, TKeys extends keyof T>(obj: T, keys: TKeys[]): Omit<T, TKeys> {
  if (!obj) {
    return {} as Omit<T, TKeys>
  }
  if (!keys || keys.length === 0) {
    return obj as Omit<T, TKeys>
  }
  return keys.reduce(
    (acc, key) => {
      delete acc[key]
      return acc
    },
    { ...obj },
  )
}
