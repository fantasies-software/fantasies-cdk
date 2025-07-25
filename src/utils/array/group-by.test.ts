import { describe, expect, it } from 'vitest'
import { groupBy } from './group-by'

describe('groupBy', () => {
  it('should group by key', () => {
    expect(groupBy(['a', 'b', 'a'], x => x)).toEqual({ a: ['a', 'a'], b: ['b'] })
  })
  it('should handle empty array', () => {
    expect(groupBy([], x => x)).toEqual({})
  })
})
