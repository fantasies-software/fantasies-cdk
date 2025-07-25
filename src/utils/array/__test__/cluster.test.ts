import { describe, expect, it } from 'vitest'
import { cluster } from '../cluster'

describe('cluster', () => {
  it('should cluster an array into smaller arrays of specified size', () => {
    const input = [1, 2, 3, 4, 5, 6]
    const result = cluster(input, 2)
    expect(result).toEqual([[1, 2], [3, 4], [5, 6]])
  })

  it('should handle the last cluster with fewer elements if the array size is not a multiple of the cluster size', () => {
    const input = [1, 2, 3]
    const result = cluster(input, 2)
    expect(result).toEqual([[1, 2], [3]])
  })

  it('should return an empty array for an empty input array', () => {
    const input: number[] = []
    const result = cluster(input, 2)
    expect(result).toEqual([])
  })

  it('should return an empty array for a size less than or equal to zero', () => {
    const input = [1, 2, 3]
    const result = cluster(input, -1)
    expect(result).toEqual([])

    const resultZero = cluster(input, 0)
    expect(resultZero).toEqual([])
  })

  it('should return an empty array for non-array inputs', () => {
    const input: any = null
    const result = cluster(input, 2)
    expect(result).toEqual([])

    const resultUndefined = cluster(undefined as any, 2)
    expect(resultUndefined).toEqual([])
  })
})
