import { describe, expect, it } from 'vitest'
import { capitalize } from '../capitalize'

describe('capitalize', () => {
  it('should capitalize the first letter', () => {
    expect(capitalize('hello')).toBe('Hello')
  })
  it('should handle empty string', () => {
    expect(capitalize('')).toBe('')
  })
  it('should handle already capitalized', () => {
    expect(capitalize('Hello')).toBe('Hello')
  })
  it('should handle all caps', () => {
    expect(capitalize('WORLD')).toBe('World')
  })
})
