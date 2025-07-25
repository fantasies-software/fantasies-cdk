import { describe, expect, it } from 'vitest'
import { keys } from './keys'

describe('keys', () => {
  it('returns all nested keys as paths', () => {
    expect(keys({ a: { b: { c: 1 } }, d: [2, 3] })).toEqual(['a.b.c', 'd.0', 'd.1'])
  })
  it('returns empty array for null input', () => {
    expect(keys(null as any)).toEqual([])
  })
  it('returns empty array for empty object', () => {
    expect(keys({})).toEqual([])
  })
})
