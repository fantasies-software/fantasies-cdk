import { describe, expect, it } from 'vitest'
import { sum } from './sum'

describe('sum', () => {
  it('should return 6 for sum([1, 2, 3])', () => {
    const result = sum([1, 2, 3])
    expect(result).toBe(6)
  })

  it('should return 6 for sum([{ value: 1 }, { value: 2 }, { value: 3 }], item => item.value)', () => {
    const result = sum([{ value: 1 }, { value: 2 }, { value: 3 }], item => item.value)
    expect(result).toBe(6)
  })

  it('should return 0 for empty array', () => {
    const result = sum([])
    expect(result).toBe(0)
  })

  it('should return 0 for undefined input', () => {
    const result = sum(undefined as unknown as number[])
    expect(result).toBe(0)
  })
})
