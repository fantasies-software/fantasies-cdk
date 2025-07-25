/**
 * Creates a new object with only the specified keys from the original object.
 * eg: pick({ a: 1, b: 2, c: 3 }, ['a', 'c']) returns { a: 1, c: 3 }.
 */
export function pick<T extends object, TKeys extends keyof T>(obj: T, keys: TKeys[]): Pick<T, TKeys> {
  if (!obj) {
    return {} as Pick<T, TKeys>
  }
  else {
    return keys.reduce((acc, key) => {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        acc[key] = obj[key]
      }
      return acc
    }, {} as Pick<T, TKeys>)
  }
}
