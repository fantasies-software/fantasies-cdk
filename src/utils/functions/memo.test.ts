import { describe, expect, it } from 'vitest'
import { memo } from './memo'

describe('memo', () => {
  it('should memoize function results', () => {
    let count = 0
    const fn = (x: number) => ++count
    const m = memo(fn)
    expect(m(1)).toBe(1)
    expect(m(1)).toBe(1)
    expect(m(2)).toBe(2)
  })

  it('should use custom key', () => {
    let count = 0
    const fn = (x: number) => ++count
    const m = memo(fn, { key: x => `k${x}` })
    expect(m(1)).toBe(1)
    expect(m(1)).toBe(1)
    expect(m(2)).toBe(2)
  })

  it('should expire with ttl', async () => {
    let count = 0
    const fn = (x: number) => ++count
    const m = memo(fn, { ttl: 10 })
    expect(m(1)).toBe(1)
    await new Promise(r => setTimeout(r, 15))
    expect(m(1)).toBe(2)
  })
})
