import { describe, expect, it } from 'vitest'
import { callable } from './callable'

describe('callable', () => {
  it('should call the function and access properties', () => {
    const obj = { a: 1, b: 2 }
    const fn = (self: typeof obj) => (x: number) => self.a + self.b + x
    const c = callable(obj, fn)
    expect(c(3)).toBe(6)
    expect(c.a).toBe(1)
    expect(c.b).toBe(2)
  })

  it('should set properties', () => {
    const obj = { a: 1 }
    const fn = (self: typeof obj) => (x: number) => self.a + x
    const c = callable(obj, fn)
    c.a = 5
    expect(c.a).toBe(5)
    expect(c(2)).toBe(7)
  })
})
