import { describe, expect, it } from 'vitest'
import { sum } from './sum'

describe('sum', () => {
  it('should sum array', () => {
    expect(sum([1, 2, 3])).toBe(6)
  })
  it('should handle empty array', () => {
    expect(sum([])).toBe(0)
  })
})
