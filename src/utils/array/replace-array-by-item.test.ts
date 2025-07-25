import { describe, expect, it } from 'vitest'
import { replaceArrayByItem } from './replace-array-by-item'

describe('replaceArrayByItem', () => {
  it('should replace the first occurrence of an item in an array', () => {
    const result = replaceArrayByItem([1, 2, 3, 2, 4], 0, item => item === 2)
    expect(result).toEqual([1, 0, 3, 2, 4])
  })

  it('should return an empty array if input is not an array', () => {
    const result = replaceArrayByItem(null as any, 0, item => item === 2)
    expect(result).toEqual([])
  })

  it('should return the same array if item is undefined or null', () => {
    const result = replaceArrayByItem([1, 2, 3], undefined as any, item => item === 2)
    expect(result).toEqual([1, 2, 3])
  })

  it('should replace the first occurrence based on the matching function', () => {
    const result = replaceArrayByItem(['apple', 'banana', 'apple'], 'orange', item => item === 'apple')
    expect(result).toEqual(['orange', 'banana', 'apple'])
  })

  it('should handle an empty array', () => {
    const result = replaceArrayByItem([], 0, (item: any) => item === 2)
    expect(result).toEqual([])
  })
})
