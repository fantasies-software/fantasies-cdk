import { clone } from './clone'

/**
 *  Sets a value at a specified path in an object, creating nested objects or arrays as needed.
 *  eg: set({ a: { b: { c: 1 } } }, 'a.b.d', 2) returns { a: { b: { c: 1, d: 2 } } }.
 */
export function set<T extends object, K>(initial: T, path: string, value: K): T {
  if (!initial) {
    return {} as T
  }
  if (!path || value === undefined) {
    return initial
  }
  const segments = path.split(/[.[\]]/g).filter(x => !!x.trim())
  const _set = (node: any) => {
    if (segments.length > 1) {
      const key = segments.shift() as string
      const nextIsNum = /^\d+$/.test(segments[0])
      if (node[key] === undefined) {
        if (nextIsNum) {
          node[key] = []
        }
        else {
          node[key] = {}
        }
      }
      _set(node[key])
    }
    else {
      node[segments[0]] = value
    }
  }
  const cloned = clone(initial)
  _set(cloned)
  return cloned
}
