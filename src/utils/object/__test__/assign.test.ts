import { describe, expect, it } from 'vitest'
import { assign } from '../assign'

describe('assign', () => {
  it('merges flat objects', () => {
    expect(assign({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 })
  })
  it('merges nested objects', () => {
    expect(assign({ a: { b: 1 } }, { a: { c: 2 } })).toEqual({ a: { b: 1, c: 2 } })
  })
  it('returns override if initial is null', () => {
    expect(assign(null as any, { a: 1 })).toEqual({ a: 1 })
  })
  it('returns initial if override is null', () => {
    expect(assign({ a: 1 }, null as any)).toEqual({ a: 1 })
  })
  it('returns empty object if both are null', () => {
    expect(assign(null as any, null as any)).toEqual({})
  })
})
