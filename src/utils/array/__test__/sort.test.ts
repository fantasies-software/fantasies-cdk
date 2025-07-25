import { describe, expect, it } from 'vitest'
import { sort } from '../sort'

describe('sort', () => {
  it('should sort an array of numbers in ascending order', () => {
    const result = sort([5, 3, 8, 1, 2], item => item)
    expect(result).toEqual([1, 2, 3, 5, 8])
  })

  it('should sort an array of numbers in descending order', () => {
    const result = sort([5, 3, 8, 1, 2], item => item, 'desc')
    expect(result).toEqual([8, 5, 3, 2, 1])
  })

  it('should sort an array of objects based on a getter function in ascending order', () => {
    const result = sort([{ value: 3 }, { value: 1 }, { value: 2 }], item => item.value)
    expect(result).toEqual([{ value: 1 }, { value: 2 }, { value: 3 }])
  })

  it('should sort an array of objects based on a getter function in descending order', () => {
    const result = sort([{ value: 3 }, { value: 1 }, { value: 2 }], item => item.value, 'desc')
    expect(result).toEqual([{ value: 3 }, { value: 2 }, { value: 1 }])
  })

  it('should handle an empty array', () => {
    const result = sort([], item => item)
    expect(result).toEqual([])
  })

  it('should handle a single-element array', () => {
    const result = sort([42], item => item)
    expect(result).toEqual([42])
  })

  it('should handle arrays with negative numbers', () => {
    const result = sort([-1, -5, -3], item => item)
    expect(result).toEqual([-5, -3, -1])
  })

  it('should return empty array for invalid array input', () => {
    expect(sort(null as any, _item => 0)).toEqual([])
    expect(sort(undefined as any, _item => 0)).toEqual([])
  })
})
