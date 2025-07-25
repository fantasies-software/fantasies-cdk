import { describe, expect, it } from 'vitest'
import { zipToObject } from './zip-to-object'

describe('zipToObject', () => {
  it('should zip arrays to object', () => {
    expect(zipToObject(['a', 'b'], [1, 2])).toEqual({ a: 1, b: 2 })
  })
  it('should handle empty arrays', () => {
    expect(zipToObject([], [])).toEqual({})
  })
})
