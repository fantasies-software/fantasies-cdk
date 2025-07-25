import { isPrimitive } from '../typed'

/**
 *  Clones an object deeply, preserving its type.
 *  Note: This does not handle circular references.
 *  Use with caution for complex objects.
 *  eg: clone({ a: 1, b: { c: 2 } }) returns { a: 1, b: { c: 2 } }
 */
export function clone<T>(obj: T): T {
  if (isPrimitive(obj)) {
    return obj
  }

  if (typeof obj === 'function') {
    return obj.bind({})
  }

  const proto = Object.getPrototypeOf(obj)
  let newObj: any
  if (proto === null) {
    newObj = Object.create(null)
  }
  else {
    const Ctor = (obj as object).constructor
    if (typeof Ctor === 'function') {
      newObj = new (Ctor as { new (): T })()
    }
    else {
      newObj = {}
    }
  }

  Object.getOwnPropertyNames(obj).forEach((prop) => {
    newObj[prop] = (obj as any)[prop]
  })

  return newObj
}
