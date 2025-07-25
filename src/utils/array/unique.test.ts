import { describe, expect, it } from 'vitest'
import { unique } from './unique'

describe('unique', () => {
  it('should return unique values', () => {
    expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3])
  })
  it('should handle empty array', () => {
    expect(unique([])).toEqual([])
  })
})
