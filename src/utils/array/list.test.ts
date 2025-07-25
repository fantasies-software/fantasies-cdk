import { describe, expect, it } from 'vitest'
import { list } from './list'

describe('list', () => {
  it('should generate a list of numbers from 0 to n', () => {
    const result = list(5)
    expect(result).toEqual([0, 1, 2, 3, 4, 5])
  })

  it('should generate a list of numbers from start to end', () => {
    const result = list(1, 5)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should apply a mapper function to the generated list', () => {
    const result = list(1, 5, i => i * 2)
    expect(result).toEqual([2, 4, 6, 8, 10])
  })

  it('should return a constant value for each element when a value is provided', () => {
    const result = list(1, 5, 'value', 2)
    expect(result).toEqual(['value', 'value', 'value'])
  })
})
