import { describe, expect, it } from 'vitest'
import { shuffle } from './shuffle'

describe('shuffle', () => {
  it('returns an array of the same length', () => {
    const arr = [1, 2, 3, 4, 5]
    expect(shuffle(arr)).toHaveLength(arr.length)
  })
  it('returns a permutation of the original array', () => {
    const arr = [1, 2, 3]
    const result = shuffle(arr)
    expect(result.sort()).toEqual(arr.sort())
  })
  it('returns empty array for empty input', () => {
    expect(shuffle([])).toEqual([])
  })
})
