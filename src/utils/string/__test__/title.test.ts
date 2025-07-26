import { describe, expect, it } from 'vitest'
import { title } from '../title'

describe('title', () => {
  it('should convert camelCase to Title Case', () => {
    expect(title('camelCase')).toBe('Camel Case')
  })
  it('should convert dash-case to Title Case', () => {
    expect(title('dash-case')).toBe('Dash Case')
  })
  it('should handle empty string', () => {
    expect(title('')).toBe('')
  })
  it('should handle single word', () => {
    expect(title('word')).toBe('Word')
  })
})
