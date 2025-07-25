import { describe, expect, it } from 'vitest'
import { range } from './range'

describe('range', () => {
  it('should generate a range of numbers from 0 to n', () => {
    const result = Array.from(range(5))
    expect(result).toEqual([0, 1, 2, 3, 4, 5])
  })

  it('should generate a range of numbers from start to end', () => {
    const result = Array.from(range(1, 5))
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should apply a mapper function to the generated range', () => {
    const result = Array.from(range(1, 5, i => i * 2))
    expect(result).toEqual([2, 4, 6, 8, 10])
  })

  it('should return a constant value for each element when a value is provided', () => {
    const result = Array.from(range(1, 5, 'value', 2))
    expect(result).toEqual(['value', 'value', 'value'])
  })

  it('should handle step values correctly', () => {
    const result = Array.from(range(1, 10, i => i * 2, 2))
    expect(result).toEqual([2, 6, 10, 14, 18])
  })

  it('should handle a single number as input', () => {
    const result = Array.from(range(3))
    expect(result).toEqual([0, 1, 2, 3])
  })
})
