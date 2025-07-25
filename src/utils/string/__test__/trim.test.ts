import { describe, expect, it } from 'vitest'
import { trim } from '../trim'

describe('trim', () => {
  it('should trim spaces by default', () => {
    expect(trim('  hello  ')).toBe('hello')
  })
  it('should trim custom chars', () => {
    expect(trim('--hello--', '-')).toBe('hello')
  })
  it('should handle null/undefined', () => {
    expect(trim(null)).toBe('')
    expect(trim(undefined)).toBe('')
  })
  it('should trim multiple custom chars', () => {
    expect(trim('abchelloabc', 'abc')).toBe('hello')
  })
})
