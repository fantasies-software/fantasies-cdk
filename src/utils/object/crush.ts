import { objectify } from '../array/objectify'
import { get } from './get'
import { keys } from './keys'

/**
 *  Crushes an object into a flat structure where each key is a path to the value.
 *  eg: crush({ a: { b: { c: 1 } }, d: [2, 3] }) returns { 'a.b.c': 1, 'd.0': 2, 'd.1': 3 }.
 */
export function crush<TValue extends object>(value: TValue): object {
  if (!value) {
    return {}
  }
  return objectify(
    keys(value),
    k => k,
    k => get(value, k),
  )
}
