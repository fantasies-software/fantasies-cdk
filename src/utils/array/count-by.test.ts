import { describe, expect, it } from 'vitest'
import { countBy } from './count-by'

describe('countBy', () => {
  it('should count by key', () => {
    expect(countBy(['a', 'b', 'a'], x => x)).toEqual({ a: 2, b: 1 })
  })
  it('should handle empty array', () => {
    expect(countBy([], x => x)).toEqual({})
  })
})
