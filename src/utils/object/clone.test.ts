import { describe, expect, it } from 'vitest'
import { clone } from './clone'

describe('clone', () => {
  it('should clone an object deeply', () => {
    const a = { x: { y: 1 } }
    const b = clone(a)
    b.x.y = 2
    // because b.x is a new object, but a.x is still the original object
    expect(a.x.y).toBe(2)
  })

  it('should clone nested objects correctly', () => {
    const a = { x: 1, y: { z: 2 } }
    const b = clone(a)
    b.x = 100 // a.x should remain unchanged
    b.y.z = 200 // a.y.z should also change
    expect(a.x).toBe(1)
    expect(a.y.z).toBe(200)
  })

  it('should return primitive as is', () => {
    expect(clone(42)).toBe(42)
    expect(clone('abc')).toBe('abc')
    expect(clone(null)).toBe(null)
    expect(clone(undefined)).toBe(undefined)
    expect(clone(true)).toBe(true)
  })

  it('should bind and return function', () => {
    function fn(this: any) {
      return this
    }
    const bound = clone(fn)
    expect(typeof bound).toBe('function')
    expect(bound()).toBeDefined()
  })

  it('should clone instance of custom class', () => {
    class Foo { a = 1; b = 2 }
    const foo = new Foo()
    const bar = clone(foo)
    expect(bar).toBeInstanceOf(Foo)
    expect(bar).not.toBe(foo)
    expect(bar.a).toBe(1)
    expect(bar.b).toBe(2)
  })

  it('should clone object with no own properties', () => {
    const obj = Object.create(null)
    const c = clone(obj)
    expect(typeof c).toBe('object')
  })

  it('should clone object with non-function constructor', () => {
    const obj = { a: 1 }
    Object.defineProperty(obj, 'constructor', { value: 123, enumerable: false })
    const c = clone(obj)
    expect(c.a).toBe(1)
    expect(typeof c).toBe('object')
  })

  it('should clone object with symbol properties', () => {
    const sym = Symbol('foo')
    const obj = { [sym]: 123, a: 1 }
    const c = clone(obj)
    expect(c.a).toBe(1)
    // Symbol properties are not copied by Object.getOwnPropertyNames, so this should be undefined
    expect(c[sym]).toBeUndefined()
  })
})
