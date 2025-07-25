import { describe, expect, it } from 'vitest'
import { get } from './get'

describe('get', () => {
  it('gets value by path', () => {
    expect(get({ a: { b: { c: 1 } } }, 'a.b.c')).toBe(1)
  })
  it('returns default for missing path', () => {
    expect(get({ a: 1 }, 'b', 42)).toBe(42)
  })
  it('returns default for null object', () => {
    expect(get(null as any, 'a', 99)).toBe(99)
  })
  it('returns undefined for missing path without default', () => {
    expect(get({ a: 1 }, 'b')).toBe(undefined)
  })
  it('returns value for array index path', () => {
    expect(get({ a: [1, 2, 3] }, 'a.1')).toBe(2)
  })
  it('returns value for path with quotes', () => {
    expect(get({ a: { 'b.c': 5 } }, 'a.[b.c]')).toBe(5)
  })
  it('returns value for path with empty segments', () => {
    expect(get({ a: { b: 1 } }, 'a..b')).toBe(1)
  })
  it('returns input for empty path', () => {
    expect(get({ a: 1 }, '')).toEqual({ a: 1 })
  })
})
