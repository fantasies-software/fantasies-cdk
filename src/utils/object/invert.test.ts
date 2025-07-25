import { describe, expect, it } from 'vitest'
import { invert } from './invert'

describe('invert', () => {
  it('inverts keys and values', () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ 1: 'a', 2: 'b' })
  })
  it('returns empty object for null input', () => {
    expect(invert(null as any)).toEqual({})
  })
  it('returns empty object for empty input', () => {
    expect(invert({})).toEqual({})
  })
})
