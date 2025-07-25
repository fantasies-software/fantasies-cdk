import { describe, expect, it } from 'vitest'
import { iterate } from '../iterate'

describe('iterate', () => {
  it('should sum numbers from 1 to 5', () => {
    const result = iterate(5, (acc: number, i: number) => acc + i, 0)
    expect(result).toBe(15)
  })

  it('should return initValue if count is 0', () => {
    const result = iterate(0, (acc: number, i: number) => acc + i, 42)
    expect(result).toBe(42)
  })

  it('should handle negative count (should return initValue)', () => {
    const result = iterate(-3, (acc: number, i: number) => acc + i, 10)
    expect(result).toBe(10)
  })

  it('should work with string concatenation', () => {
    const result = iterate(3, (acc: string, i: number) => acc + i, '')
    expect(result).toBe('123')
  })
})
