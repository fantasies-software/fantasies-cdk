import { describe, expect, it } from 'vitest'
import { replaceAllArrayByItem } from '../replace-all-array-by-item'

describe('replaceAllArrayByItem', () => {
  it('should replace all occurrences of an item in an array', () => {
    const result = replaceAllArrayByItem([1, 2, 3, 2, 4], 0, item => item === 2)
    expect(result).toEqual([1, 0, 3, 0, 4])
  })

  it('should return an empty array if input is not an array', () => {
    const result = replaceAllArrayByItem(null as any, 0, item => item === 2)
    expect(result).toEqual([])
  })

  it('should return the same array if item is undefined or null', () => {
    const result = replaceAllArrayByItem([1, 2, 3], undefined as any, item => item === 2)
    expect(result).toEqual([1, 2, 3])
  })

  it('should replace all occurrences based on the matching function', () => {
    const result = replaceAllArrayByItem(['apple', 'banana', 'apple'], 'orange', item => item === 'apple')
    expect(result).toEqual(['orange', 'banana', 'orange'])
  })

  it('should handle an empty array', () => {
    const result = replaceAllArrayByItem([], 0, (item: any) => item === 2)
    expect(result).toEqual([])
  })
})
