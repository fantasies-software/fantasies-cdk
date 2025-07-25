import { describe, expect, it } from 'vitest'
import { sum } from '../sum'

describe('sum', () => {
  it('should calculate the sum of an array of numbers', () => {
    const result = sum([1, 2, 3])
    expect(result).toBe(6)
  })
  it('should return 0 for an empty array of numbers', () => {
    const result = sum([])
    expect(result).toBe(0)
  })
  it('should calculate the sum of an array of objects using a selector function', () => {
    const result = sum([{ value: 1 }, { value: 2 }, { value: 3 }], item => item.value)
    expect(result).toBe(6)
  })

  it('should return 0 for an empty array of objects with a selector function', () => {
    const result = sum([], item => (item as any).value)
    expect(result).toBe(0)
  })

  it('should handle a single element in an array of numbers', () => {
    const result = sum([42])
    expect(result).toBe(42)
  })

  it('should handle a single element in an array of objects with a selector function', () => {
    const result = sum([{ value: 42 }], item => item.value)
    expect(result).toBe(42)
  })
  it('should return 0 for null, undefined, or non-array input', () => {
    expect(sum(null as any)).toBe(0)
    expect(sum(undefined as any)).toBe(0)
    expect(sum({} as any)).toBe(0)
    expect(sum('not-an-array' as any)).toBe(0)
  })
})
