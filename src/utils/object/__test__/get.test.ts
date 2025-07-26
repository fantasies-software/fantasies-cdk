import { describe, expect, it } from 'vitest'
import { get } from '../get'

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

  it('returns default for undefined object', () => {
    expect(get(undefined, 'a', 123)).toBe(123)
  })

  it('returns default for out-of-bounds array index', () => {
    expect(get({ a: [1, 2, 3] }, 'a.10', 0)).toBe(0)
  })

  it('returns default for missing path with defaultValue=0/empty/null', () => {
    expect(get({ a: 1 }, 'b', 0)).toBe(0)
    expect(get({ a: 1 }, 'b', '')).toBe('')
    expect(get({ a: 1 }, 'b', null)).toBe(null)
  })

  it('returns undefined for invalid path', () => {
    expect(get({ a: 1 }, '[invalid')).toBe(undefined)
  })
})
