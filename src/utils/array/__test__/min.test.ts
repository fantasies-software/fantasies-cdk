import { describe, expect, it } from 'vitest'
import { min } from '../min'

describe('min', () => {
  it('should return the minimum number from an array of numbers', () => {
    const result = min([1, 2, 3, 4, 5])
    expect(result).toBe(1)
  })

  it('should return null for an empty array of numbers', () => {
    const result = min([])
    expect(result).toBeNull()
  })

  it('should return the minimum object based on a getter function', () => {
    const result = min([{ value: 3 }, { value: 2 }, { value: 1 }], item => item.value)
    expect(result).toEqual({ value: 1 })
  })

  it('should return null for an empty array with a getter function', () => {
    const result = min([], item => (item as any).value)
    expect(result).toBeNull()
  })

  it('should return the minimum number from a single-element array', () => {
    const result = min([42])
    expect(result).toBe(42)
  })

  it('should handle arrays with negative numbers', () => {
    const result = min([-1, -2, -3])
    expect(result).toBe(-3)
  })

  it('should handle arrays with mixed positive and negative numbers', () => {
    const result = min([-1, 0, 1, 2])
    expect(result).toBe(-1)
  })
})
