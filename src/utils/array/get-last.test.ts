import { describe, expect, it } from 'vitest'
import { getLast } from './get-last'

describe('getLast', () => {
  it('should return the last element of a non-empty array', () => {
    const input = [1, 2, 3]
    const result = getLast(input)
    expect(result).toBe(3)
  })

  it('should return the default value if the array is empty', () => {
    const input: number[] = []
    const defaultValue = 42
    const result = getLast(input, defaultValue)
    expect(result).toBe(defaultValue)
  })

  it('should return null if the array is empty and no default value is provided', () => {
    const input: number[] = []
    const result = getLast(input)
    expect(result).toBeNull()
  })

  it('should return null for an empty array with no default value', () => {
    const input: string[] = []
    const result = getLast(input)
    expect(result).toBeNull()
  })

  it('should handle arrays with different types', () => {
    const input = [1, 'two', true]
    const result = getLast(input as any)
    expect(result).toBe(true)
  })

  it('should return the last element of an array with a single element', () => {
    const input = [42]
    const result = getLast(input)
    expect(result).toBe(42)
  })
})
