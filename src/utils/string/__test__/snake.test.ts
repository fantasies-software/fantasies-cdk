import { describe, expect, it } from 'vitest'
import { snake } from '../snake'

describe('snake', () => {
  it('should convert camelCase to snake_case', () => {
    expect(snake('camelCase')).toBe('camel_case')
  })
  it('should convert PascalCase to snake_case', () => {
    expect(snake('PascalCase')).toBe('pascal_case')
  })
  it('should handle empty string', () => {
    expect(snake('')).toBe('')
  })
  it('should handle single word', () => {
    expect(snake('word')).toBe('word')
  })
  it('should split on number if option is true', () => {
    expect(snake('foo1Bar', { splitOnNumber: true })).toBe('foo_1_bar')
  })
  it('should not split on number if option is false', () => {
    expect(snake('foo1Bar', { splitOnNumber: false })).toBe('foo1_bar')
  })

  it('should handle null/undefined', () => {
    // @ts-expect-error purposely test null
    expect(snake(null)).toBe('')
    // @ts-expect-error purposely test undefined
    expect(snake(undefined)).toBe('')
  })

  it('should handle multiple delimiters', () => {
    expect(snake('foo-bar_baz.qux')).toBe('foo_bar_baz_qux')
  })

  it('should handle all uppercase', () => {
    expect(snake('FOO')).toBe('foo')
  })

  it('should handle mixed delimiters and cases', () => {
    expect(snake('foo-Bar_baz.Qux')).toBe('foo_bar_baz_qux')
  })

  it('should handle splitOnNumber=false with numbers', () => {
    expect(snake('foo1Bar2Baz', { splitOnNumber: false })).toBe('foo1_bar2_baz')
  })
})
