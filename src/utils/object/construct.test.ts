import { describe, expect, it } from 'vitest'
import { construct } from './construct'

describe('construct', () => {
  it('constructs nested object from path keys', () => {
    expect(construct({ 'a.b.c': 1, 'd.e': 2 })).toEqual({ a: { b: { c: 1 } }, d: { e: 2 } })
  })
  it('returns empty object for null input', () => {
    expect(construct(null as any)).toEqual({})
  })
  it('returns empty object for empty input', () => {
    expect(construct({})).toEqual({})
  })
})
