import { describe, expect, it } from 'vitest'
import { mapValues } from '../map-values'

describe('mapValues', () => {
  it('maps values to new values', () => {
    expect(mapValues({ a: 1, b: 2 }, v => v * 2)).toEqual({ a: 2, b: 4 })
  })
  it('returns empty object for empty input', () => {
    expect(mapValues({}, v => v)).toEqual({})
  })
})
