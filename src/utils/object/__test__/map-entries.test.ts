import { describe, expect, it } from 'vitest'
import { mapEntries } from '../map-entries'

describe('mapEntries', () => {
  it('maps entries to new keys and values', () => {
    expect(mapEntries({ a: 1, b: 2 }, (k, v) => [k.toUpperCase(), v * 2])).toEqual({ A: 2, B: 4 })
  })
  it('returns empty object for null input', () => {
    expect(mapEntries(null as any, () => ['x', 1])).toEqual({})
  })
  it('returns empty object for empty input', () => {
    expect(mapEntries({}, () => ['x', 1])).toEqual({})
  })
})
