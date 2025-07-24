import { describe, expect, it } from 'vitest'
import { countBy } from './count'

describe('countBy', () => {
  it('counts by key', () => {
    const arr = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Alice' }]
    expect(countBy(arr, x => x.name)).toEqual({ Alice: 2, Bob: 1 })
  })
  it('returns empty object for non-array', () => {
    expect(countBy(null as any, x => x as any)).toEqual({})
  })
  it('counts numbers', () => {
    expect(countBy([1, 2, 1, 3], x => x)).toEqual({ 1: 2, 2: 1, 3: 1 })
  })
})
