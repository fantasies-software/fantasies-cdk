import { describe, expect, it } from 'vitest'
import { camel } from '../camel'

describe('camel', () => {
  it('should convert dash-case to camelCase', () => {
    expect(camel('dash-case')).toBe('dashCase')
  })
  it('should convert snake_case to camelCase', () => {
    expect(camel('snake_case')).toBe('snakeCase')
  })
  it('should handle empty string', () => {
    expect(camel('')).toBe('')
  })
  it('should handle single word', () => {
    expect(camel('word')).toBe('word')
  })

  it('should handle null/undefined', () => {
    // @ts-expect-error purposely test null
    expect(camel(null)).toBe('')
    // @ts-expect-error purposely test undefined
    expect(camel(undefined)).toBe('')
  })

  it('should handle multiple delimiters', () => {
    expect(camel('foo-bar_baz.qux')).toBe('fooBarBazQux')
  })

  it('should handle all uppercase', () => {
    expect(camel('FOO')).toBe('foo')
  })

  it('should handle mixed delimiters and cases', () => {
    expect(camel('foo-Bar_baz.Qux')).toBe('fooBarBazQux')
  })
})
