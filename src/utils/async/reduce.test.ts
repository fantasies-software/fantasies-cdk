import { describe, expect, it } from 'vitest'
import { reduce } from './reduce'

describe('reduce', () => {
  it('reduces array asynchronously', async () => {
    const result = await reduce([1, 2, 3], async (acc, x) => acc + x, 0)
    expect(result).toBe(6)
  })

  it('reduces array without initial value', async () => {
    const result = await reduce([1, 2, 3], async (acc, x) => acc + x)
    expect(result).toBe(6)
  })

  it('throws on empty array without initial value', async () => {
    await expect(reduce([], async (acc, x) => acc + x)).rejects.toThrow()
  })
})
