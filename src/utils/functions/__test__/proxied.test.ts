import { describe, expect, it } from 'vitest'
import { proxied } from '../proxied'

describe('proxied', () => {
  it('should return values from handler', () => {
    const p = proxied((key: string) => key.toUpperCase())
    expect(p.hello).toBe('HELLO')
    expect(p.world).toBe('WORLD')
  })
})
