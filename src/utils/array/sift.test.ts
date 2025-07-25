import { describe, expect, it } from 'vitest'

import { sift } from './sift'

describe('sift', () => {
  it('should return an empty array for an empty input', () => {
    expect(sift([])).toEqual([])
  })
  it('should filter out all falsy values', () => {
    expect(sift([0, false, '', null, undefined, 1, 'a', true])).toEqual([1, 'a', true])
  })

  it('should return [] for null or undefined', () => {
    expect(sift(undefined as any)).toEqual([])
    expect(sift(null as any)).toEqual([])
  })
})
