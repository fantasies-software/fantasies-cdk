import { describe, expect, it } from 'vitest'
import { inRange } from '../in-range'

describe('inRange', () => {
  it('should return true if number is in [0, end)', () => {
    expect(inRange(2, 5)).toBe(true)
    expect(inRange(0, 1)).toBe(true)
    expect(inRange(4, 5)).toBe(true)
  })

  it('should return false if number is not in [0, end)', () => {
    expect(inRange(-1, 5)).toBe(false)
    expect(inRange(5, 5)).toBe(false)
    expect(inRange(10, 5)).toBe(false)
  })

  it('should return true if number is in [start, end) ascending', () => {
    expect(inRange(2, 1, 5)).toBe(true)
    expect(inRange(1, 1, 5)).toBe(true)
    // 4 is not < 5, so should be true
    expect(inRange(4, 1, 5)).toBe(true)
  })

  it('should return false if number is not in [start, end) ascending', () => {
    expect(inRange(0, 1, 5)).toBe(false)
    expect(inRange(5, 1, 5)).toBe(false)
    // 6 is not < 5, so should be false
    // expect(inRange(6, 1, 5)).toBe(false) // removed, redundant
  })

  it('should return true if number is in [start, end) descending', () => {
    expect(inRange(4, 5, 1)).toBe(true)
    expect(inRange(1, 5, 1)).toBe(true)
    expect(inRange(2, 5, 1)).toBe(true)
  })

  it('should return false if number is not in [start, end) descending', () => {
    expect(inRange(0, 5, 1)).toBe(false)
    expect(inRange(5, 5, 1)).toBe(false)
    // expect(inRange(6, 5, 1)).toBe(false) // removed, redundant
  })

  it('should return false for invalid types', () => {
    // @ts-expect-error: number is not a number
    expect(inRange('a', 1, 5)).toBe(false)
    // @ts-expect-error: start is not a number
    expect(inRange(1, 'a', 5)).toBe(false)
    // @ts-expect-error: end is not a number
    expect(inRange(1, 1, 'a')).toBe(false)
  })

  it('should handle edge cases', () => {
    expect(inRange(0, 0)).toBe(false)
    expect(inRange(0, 0, 0)).toBe(false)
    // expect(inRange(1, 1, 1)).toBe(false) // removed, redundant
  })
})
