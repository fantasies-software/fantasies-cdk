import { describe, expect, it } from 'vitest'
import { max } from './max'

describe('max', () => {
  it('should return the maximum number from an array of numbers', () => {
    const result = max([1, 2, 3, 4, 5])
    expect(result).toBe(5)
  })

  it('should return null for an empty array of numbers', () => {
    const result = max([])
    expect(result).toBeNull()
  })

  it('should return the maximum object based on a getter function', () => {
    const result = max([{ value: 1 }, { value: 2 }, { value: 3 }], item => item.value)
    expect(result).toEqual({ value: 3 })
  })

  it('should return null for an empty array with a getter function', () => {
    const result = max([], item => (item as any).value)
    expect(result).toBeNull()
  })

  it('should return the maximum number from a single-element array', () => {
    const result = max([42])
    expect(result).toBe(42)
  })

  it('should handle arrays with negative numbers', () => {
    const result = max([-1, -2, -3])
    expect(result).toBe(-1)
  })

  it('should handle arrays with mixed positive and negative numbers', () => {
    const result = max([-1, 0, 1, 2])
    expect(result).toBe(2)
  })
})
