import { describe, expect, it } from 'vitest'
import { partial } from '../partial'

describe('partial', () => {
  it('should partially apply arguments', () => {
    const fn = (a: number, b: number, c: number) => a + b + c
    const p = partial(fn, 1)
    expect(p(2, 3)).toBe(6)
    const p2 = partial(fn, 1, 2)
    expect(p2(3)).toBe(6)
  })
})
