import { describe, expect, it } from 'vitest'
import { cluster } from './cluster'

describe('cluster', () => {
  it('should cluster array by size', () => {
    expect(cluster([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]])
  })
  it('should handle empty array', () => {
    expect(cluster([], 2)).toEqual([])
  })
})
