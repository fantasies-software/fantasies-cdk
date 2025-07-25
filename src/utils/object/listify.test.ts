import { describe, expect, it } from 'vitest'
import { listify } from './listify'

describe('listify', () => {
  it('converts object to list of items', () => {
    expect(listify({ a: 1, b: 2 }, (k, v) => ({ k, v }))).toEqual([
      { k: 'a', v: 1 },
      { k: 'b', v: 2 },
    ])
  })
  it('returns empty array for null input', () => {
    expect(listify(null as any, () => 1)).toEqual([])
  })
  it('returns empty array for empty object', () => {
    expect(listify({}, () => 1)).toEqual([])
  })
})
