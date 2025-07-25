import { describe, expect, it } from 'vitest'
import { memoize } from './memoize'

describe('memoize', () => {
  it('should memoize function results', () => {
    let count = 0
    const fn = (x: number) => ++count
    const cache: any = {}
    const m = memoize(cache, fn, null, null)
    expect(m(1)).toBe(1)
    expect(m(1)).toBe(1)
    expect(m(2)).toBe(2)
  })

  it('should use custom key', () => {
    let count = 0
    const fn = (x: number) => ++count
    const cache: any = {}
    const m = memoize(cache, fn, x => `k${x}`, null)
    expect(m(1)).toBe(1)
    expect(m(1)).toBe(1)
    expect(m(2)).toBe(2)
  })

  it('should expire with ttl', async () => {
    let count = 0
    const fn = (x: number) => ++count
    const cache: any = {}
    const m = memoize(cache, fn, null, 10)
    expect(m(1)).toBe(1)
    await new Promise(r => setTimeout(r, 15))
    expect(m(1)).toBe(2)
  })
})
