import { describe, expect, it } from 'vitest'
import { omit } from './omit'

describe('omit', () => {
  it('omits specified keys', () => {
    expect(omit({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ b: 2 })
  })
  it('returns empty object for null input', () => {
    expect(omit(null as any, ['a'])).toEqual({})
  })
  it('returns original object for empty keys', () => {
    expect(omit({ a: 1 }, [])).toEqual({ a: 1 })
  })
})
