import { describe, expect, it } from 'vitest'
import { chain } from './chain'

describe('chain', () => {
  it('should chain two functions', () => {
    const f1 = (x: number) => x + 1
    const f2 = (x: number) => x * 2
    const chained = chain(f1, f2)
    expect(chained(3)).toBe(8)
  })

  it('should chain three functions', () => {
    const f1 = (x: number) => x + 1
    const f2 = (x: number) => x * 2
    const f3 = (x: number) => x - 3
    const chained = chain(f1, f2, f3)
    expect(chained(3)).toBe(5)
  })
})
