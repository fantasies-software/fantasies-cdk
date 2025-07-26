import { isObject } from '../type/typed'

/**
 * Recursively merges properties from `override` into `initial`.
 * eg: assign({ a: 1, b: { c: 2 } }, { b: { d: 3 } }) returns { a: 1, b: { c: 2, d: 3 } }.
 */
export function assign<X extends Record<string | symbol | number, any>>(initial: X, override: X): X {
  if (!initial && !override) {
    return {} as X
  }
  if (!initial) {
    return override
  }
  if (!override) {
    return initial
  }

  return Object.entries({ ...initial, ...override }).reduce(
    (acc, [key, value]) => {
      return {
        ...acc,
        [key]: (() => {
          if (isObject(initial[key]))
            return assign(initial[key], value)
          return value
        })(),
      }
    },
    {} as X,
  )
}
