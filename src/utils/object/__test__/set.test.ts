import { describe, expect, it } from 'vitest'
import { set } from '../set'

describe('set', () => {
  it('sets value at path', () => {
    expect(set({ a: { b: { c: 1 } } }, 'a.b.d', 2)).toEqual({ a: { b: { c: 1, d: 2 } } })
  })
  it('creates nested objects/arrays as needed', () => {
    expect(set({}, 'a.0.b', 5)).toEqual({ a: [{ b: 5 }] })
  })
  it('returns empty object for null input', () => {
    expect(set(null as any, 'a', 1)).toEqual({})
  })
  it('returns initial for empty path', () => {
    expect(set({ a: 1 }, '', 2)).toEqual({ a: 1 })
  })
  it('returns initial for undefined value', () => {
    expect(set({ a: 1 }, 'b', undefined)).toEqual({ a: 1 })
  })
})
