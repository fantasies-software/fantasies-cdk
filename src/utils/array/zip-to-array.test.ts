import { describe, expect, it } from 'vitest'
import { zipToArray } from './zip-to-array'

describe('zipToArray', () => {
  it('should zip arrays', () => {
    expect(zipToArray([1, 2], [3, 4])).toEqual([[1, 3], [2, 4]])
  })
  it('should handle empty arrays', () => {
    expect(zipToArray([], [])).toEqual([])
  })
})
