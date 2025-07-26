import { describe, expect, it } from 'vitest'
import { memoize } from '../memoize'

describe('memoize', () => {
  it('should memoize function results', () => {
    let count = 0
    const fn = (_x: number) => ++count
    const cache: any = {}
    const m = memoize(cache, fn, null, null)
    expect(m(1)).toBe(1)
    expect(m(1)).toBe(1)
    expect(m(2)).toBe(2)
  })

  it('should use custom key', () => {
    let count = 0
    const fn = (_x: number) => ++count
    const cache: any = {}
    const m = memoize(cache, fn, x => `k${x}`, null)
    expect(m(1)).toBe(1)
    expect(m(1)).toBe(1)
    expect(m(2)).toBe(2)
  })

  it('should expire with ttl', async () => {
    let count = 0
    const fn = (_x: number) => ++count
    const cache: any = {}
    const m = memoize(cache, fn, null, 10)
    expect(m(1)).toBe(1)
    await new Promise(r => setTimeout(r, 15))
    expect(m(1)).toBe(2)
  })

  it('should return cached value if exp is undefined', () => {
    const cache: any = { '{"args":[1]}': { value: 123 } }
    const m = memoize(cache, () => 456, null, null)
    expect(m(1)).toBe(123)
  })

  it('should not return cached value if expired', () => {
    const cache: any = { '{"args":[1]}': { value: 123, exp: Date.now() - 100 } }
    const m = memoize(cache, () => 456, null, 10)
    expect(m(1)).toBe(456)
  })

  it('should work with keyFunc returning empty string', () => {
    let count = 0
    const fn = (_x: number) => ++count
    const cache: any = {}
    const m = memoize(cache, fn, () => '', null)
    expect(m(1)).toBe(1)
    expect(m(2)).toBe(1) // Same key, cache hit
  })

  it('should work with ttl=0', () => {
    let count = 0
    const fn = (_x: number) => ++count
    const cache: any = {}
    const m = memoize(cache, fn, null, 0)
    expect(m(1)).toBe(1)
    expect(m(1)).toBe(1)
  })
})
