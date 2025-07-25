import { describe, expect, it } from 'vitest'
import { dash } from './dash'

describe('dash', () => {
  it('should convert camelCase to dash-case', () => {
    expect(dash('camelCase')).toBe('camel-case')
  })
  it('should convert PascalCase to dash-case', () => {
    expect(dash('PascalCase')).toBe('pascal-case')
  })
  it('should handle empty string', () => {
    expect(dash('')).toBe('')
  })
  it('should handle single word', () => {
    expect(dash('word')).toBe('word')
  })

  it('should handle null/undefined', () => {
    // @ts-expect-error purposely test null
    expect(dash(null)).toBe('')
    // @ts-expect-error purposely test undefined
    expect(dash(undefined)).toBe('')
  })

  it('should handle multiple delimiters', () => {
    expect(dash('foo-bar_baz.qux')).toBe('foo-bar-baz-qux')
  })

  it('should handle all uppercase', () => {
    expect(dash('FOO')).toBe('foo')
  })

  it('should handle mixed delimiters and cases', () => {
    expect(dash('foo-Bar_baz.Qux')).toBe('foo-bar-baz-qux')
  })
})
