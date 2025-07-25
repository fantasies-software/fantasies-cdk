import { set } from './set'

/**
 *  Constructs an object from a given object by setting each key-value pair at the corresponding path.
 *  eg: construct({ 'a.b.c': 1, 'd.e': 2 }) returns { a: { b: { c: 1 } }, d: { e: 2 } }.
 */
export function construct<TObject extends object>(obj: TObject): object {
  if (!obj) {
    return {}
  }
  return Object.keys(obj).reduce((acc, path) => {
    return set(acc, path, (obj as any)[path])
  }, {})
}
