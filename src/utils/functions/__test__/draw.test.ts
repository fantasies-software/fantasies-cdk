import { describe, expect, it } from 'vitest'
import { draw } from '../draw'

describe('draw', () => {
  it('returns null for empty array', () => {
    expect(draw([])).toBeNull()
  })
  it('returns the only element for single-element array', () => {
    expect(draw([42])).toBe(42)
  })
  it('returns an element from the array', () => {
    const arr = [1, 2, 3, 4, 5]
    expect(arr.includes(draw(arr)!)).toBe(true)
  })
})
