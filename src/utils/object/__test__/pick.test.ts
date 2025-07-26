import { describe, expect, it } from 'vitest'
import { pick } from '../pick'

describe('pick', () => {
  it('picks specified keys', () => {
    expect(pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ a: 1, c: 3 })
  })
  it('returns empty object for null input', () => {
    expect(pick(null as any, ['a'])).toEqual({})
  })
  it('returns empty object for empty keys', () => {
    expect(pick({ a: 1 }, [])).toEqual({})
  })
  it('ignores keys not in object', () => {
    expect(pick({ a: 1 }, ['b'] as any)).toEqual({})
  })
  it('does not pick inherited properties', () => {
    const proto = { x: 1 }
    const obj = Object.create(proto)
    obj.y = 2
    expect(pick(obj, ['x', 'y'] as any)).toEqual({ y: 2 })
  })
})
