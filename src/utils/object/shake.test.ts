import { describe, expect, it } from 'vitest'
import { shake } from './shake'

describe('shake', () => {
  it('removes keys with undefined values by default', () => {
    expect(shake({ a: 1, b: undefined, c: 2 })).toEqual({ a: 1, c: 2 })
  })
  it('removes keys matching custom filter', () => {
    expect(shake({ a: 1, b: 2, c: 3 }, v => v < 2)).toEqual({ b: 2, c: 3 })
  })
  it('returns empty object for null input', () => {
    expect(shake(null as any)).toEqual({})
  })
})
