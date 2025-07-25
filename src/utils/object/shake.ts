/**
 *  shake an object by removing keys with values that match the filter function
 *  eg: shake({ a: 1, b: undefined, c: null }, value => value === undefined)  returns { a: 1, c: null }
 *  eg: shake({ a: 1, b: 2, c: 3 }, value => value < 2) returns { b: 2, c: 3 }
 */
export function shake<RemovedKeys extends string, T>(obj: T, filter: (value: any) => boolean = x => x === undefined): Omit<T, RemovedKeys> {
  if (!obj) {
    return {} as T
  }
  else {
    const keys = Object.keys(obj) as (keyof T)[]
    return keys.reduce((acc, key) => {
      if (filter(obj[key])) {
        return acc
      }
      else {
        acc[key] = obj[key]
        return acc
      }
    }, {} as T)
  }
}
