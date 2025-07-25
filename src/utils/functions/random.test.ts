import { describe, expect, it } from 'vitest'
import { random } from './random'

describe('random', () => {
  it('returns min when min == max', () => {
    expect(random(5, 5)).toBe(5)
  })
  it('returns a value between min and max (inclusive)', () => {
    for (let i = 0; i < 20; i++) {
      const val = random(1, 3)
      expect(val).toBeGreaterThanOrEqual(1)
      expect(val).toBeLessThanOrEqual(3)
    }
  })
})
