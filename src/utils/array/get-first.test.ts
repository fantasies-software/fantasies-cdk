import { describe, expect, it } from 'vitest'
import { getFirst } from './get-first'

describe('getFirst', () => {
  it('should return the first element of a non-empty array', () => {
    const input = [1, 2, 3]
    const result = getFirst(input)
    expect(result).toBe(1)
  })

  it('should return the default value if the array is empty', () => {
    const input: number[] = []
    const defaultValue = 42
    const result = getFirst(input, defaultValue)
    expect(result).toBe(defaultValue)
  })

  it('should return null if the array is empty and no default value is provided', () => {
    const input: number[] = []
    const result = getFirst(input)
    expect(result).toBeNull()
  })

  it('should return null for an empty array with no default value', () => {
    const input: string[] = []
    const result = getFirst(input)
    expect(result).toBeNull()
  })

  it('should handle arrays with different types', () => {
    const input = [1, 'two', true]
    const result = getFirst(input as any)
    expect(result).toBe(1)
  })
})
