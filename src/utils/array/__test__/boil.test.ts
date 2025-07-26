import { describe, expect, it } from 'vitest'
import { boil } from '../boil'

describe('boil', () => {
  it('should return the maximum value in an array of numbers', () => {
    const input = [1, 5, 3, 9, 2]
    const result = boil(input, (a, b) => (a > b ? a : b))
    expect(result).toBe(9)
  })
  it('should return the minimum value in an array of numbers', () => {
    const input = [1, 5, 3, 9, 2]
    const result = boil(input, (a, b) => (a < b ? a : b))
    expect(result).toBe(1)
  })
  it('should return null for an empty array', () => {
    const input: number[] = []
    const result = boil(input, (a, b) => (a > b ? a : b))
    expect(result).toBeNull()
  })
  it('should return null for a non-array input', () => {
    const input: any = null
    const result = boil(input, (a: any, b: any) => (a > b ? a : b))
    expect(result).toBeNull()
  })
})
