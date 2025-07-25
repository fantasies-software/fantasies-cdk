import { describe, expect, it } from 'vitest'
import { shift } from '../shift'

describe('shift function', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  it('should shift array right 3 positions', () => {
    const result = shift(arr, 3)
    expect(result).toEqual([7, 8, 9, 1, 2, 3, 4, 5, 6])
  })
  it('should shift array left 3 positions', () => {
    const result = shift(arr, -3)
    expect(result).toEqual([4, 5, 6, 7, 8, 9, 1, 2, 3])
  })
  it('should shift array right 6 positions', () => {
    const result = shift(arr, 15)
    expect(result).toEqual([4, 5, 6, 7, 8, 9, 1, 2, 3])
  })
  it('should shift array left 6 positions', () => {
    const result = shift(arr, -15)
    expect(result).toEqual([7, 8, 9, 1, 2, 3, 4, 5, 6])
  })
  it('should keep array as is', () => {
    const result = shift(arr, 0)
    expect(result).toEqual(arr)
  })
  it('should return empty array', () => {
    const results = shift([], 0)
    expect(results).toEqual([])
  })
})
