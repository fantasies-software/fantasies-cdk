import { describe, expect, it } from 'vitest'
import { pascal } from '../pascal'

describe('pascal', () => {
  it('should convert dash-case to PascalCase', () => {
    expect(pascal('dash-case')).toBe('DashCase')
  })
  it('should convert snake_case to PascalCase', () => {
    expect(pascal('snake_case')).toBe('SnakeCase')
  })
  it('should handle empty string', () => {
    expect(pascal('')).toBe('')
  })
  it('should handle single word', () => {
    expect(pascal('word')).toBe('Word')
  })

  it('should handle null/undefined', () => {
    // @ts-expect-error purposely test null
    expect(pascal(null)).toBe('')
    // @ts-expect-error purposely test undefined
    expect(pascal(undefined)).toBe('')
  })

  it('should handle multiple delimiters', () => {
    expect(pascal('foo-bar_baz.qux')).toBe('FooBarBazQux')
  })

  it('should handle all uppercase', () => {
    expect(pascal('FOO')).toBe('Foo')
  })

  it('should handle mixed delimiters and cases', () => {
    expect(pascal('foo-Bar_baz.Qux')).toBe('FooBarBazQux')
  })
})
