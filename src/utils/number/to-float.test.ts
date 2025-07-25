import { describe, expect, it } from 'vitest'
import { toFloat } from './to-float'

describe('toFloat', () => {
  it('should convert integer string to float', () => {
    expect(toFloat('123')).toBe(123)
  })
  it('should convert float string to float', () => {
    expect(toFloat('123.45')).toBeCloseTo(123.45)
  })
  it('should return 0 for non-numeric string', () => {
    expect(toFloat('abc')).toBe(0)
  })
  it('should return 0 for null', () => {
    expect(toFloat(null)).toBe(0)
  })
  it('should handle number input', () => {
    expect(toFloat(42)).toBe(42)
  })
  it('should return defaultValue if provided for invalid input', () => {
    expect(toFloat('abc', 99)).toBe(99)
    expect(toFloat(null, 88)).toBe(88)
  })
})
