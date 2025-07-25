import { describe, expect, it } from 'vitest'
import { selectMap } from './select-map'

describe('selectMap', () => {
  it('should map and select', () => {
    expect(selectMap([1, 2, 3], x => x > 1, x => x * 2)).toEqual([4, 6])
  })
  it('should handle empty array', () => {
    expect(selectMap([], x => true, x => x)).toEqual([])
  })
})
