import { describe, expect, it } from 'vitest'
import { crush } from './crush'

describe('crush', () => {
  it('flattens nested object to path keys', () => {
    expect(crush({ a: { b: { c: 1 } }, d: [2, 3] })).toEqual({ 'a.b.c': 1, 'd.0': 2, 'd.1': 3 })
  })
  it('returns empty object for null input', () => {
    expect(crush(null as any)).toEqual({})
  })
  it('returns empty object for empty input', () => {
    expect(crush({})).toEqual({})
  })
})
