import { describe, expect, it } from 'vitest'
import { flat } from '../flat'

describe('flat', () => {
  it('should flatten an array of arrays into a single array', () => {
    const input = [[1, 2], [3, 4], [5, 6]]
    const result = flat(input)
    expect(result).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('should return an empty array for an empty input array', () => {
    const input: number[][] = []
    const result = flat(input)
    expect(result).toEqual([])
  })

  it('should handle nested arrays', () => {
    const input = [[1, 2], [3, [4, 5]], [6]]
    const result = flat(input)
    expect(result).toEqual([1, 2, 3, [4, 5], 6])
  })

  it('should return an empty array for a non-array input', () => {
    const input: any = null
    const result = flat(input)
    expect(result).toEqual([])

    const resultUndefined = flat(undefined as any)
    expect(resultUndefined).toEqual([])
  })

  it('should handle arrays with different types', () => {
    const input = [[1, 'two'], [3, true], [null, undefined]]
    const result = flat(input as any)
    expect(result).toEqual([1, 'two', 3, true, null, undefined])
  })
})
