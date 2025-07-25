import { describe, expect, it } from 'vitest'
import { template } from '../template'

describe('template', () => {
  it('should replace placeholders with data', () => {
    expect(template('Hello {{name}}!', { name: 'World' })).toBe('Hello World!')
  })
  it('should handle multiple placeholders', () => {
    expect(template('Hi {{a}}, bye {{b}}', { a: 'A', b: 'B' })).toBe('Hi A, bye B')
  })
  it('should leave unmatched placeholders', () => {
    expect(template('Hello {{name}}!', {})).toBe('Hello {{name}}!')
  })
})
