import { describe, expect, it } from 'vitest'
import { toInt } from '../to-int'

describe('toInt', () => {
  it('should convert integer string to int', () => {
    expect(toInt('123')).toBe(123)
  })
  it('should convert float string to int (truncates)', () => {
    expect(toInt('123.45')).toBe(123)
  })
  it('should return 0 for non-numeric string', () => {
    expect(toInt('abc')).toBe(0)
  })
  it('should return 0 for null', () => {
    expect(toInt(null)).toBe(0)
  })
  it('should handle number input', () => {
    expect(toInt(42)).toBe(42)
  })
  it('should return defaultValue if provided for invalid input', () => {
    expect(toInt('abc', 99)).toBe(99)
    expect(toInt(null, 88)).toBe(88)
  })
})
