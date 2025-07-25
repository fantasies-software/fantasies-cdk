import { describe, expect, it } from 'vitest'
import { mapKeys } from '../map-keys'

describe('mapKeys', () => {
  it('maps keys to new keys', () => {
    expect(mapKeys({ a: 1, b: 2 }, k => k.toUpperCase())).toEqual({ A: 1, B: 2 })
  })
  it('returns empty object for empty input', () => {
    expect(mapKeys({}, k => k)).toEqual({})
  })
})
