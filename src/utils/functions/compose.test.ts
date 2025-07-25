import { describe, expect, it } from 'vitest'
import { compose } from './compose'

describe('compose', () => {
  it('should compose two functions', () => {
    const f1 = (next: (x: number) => number) => (x: number) => next(x) + 1
    const last = (x: number) => x * 2
    const composed = compose(f1, last)
    expect(composed(3)).toBe(7)
  })

  it('should compose three functions', () => {
    const f1 = (next: (x: number) => number) => (x: number) => next(x) + 1
    const f2 = (next: (x: number) => number) => (x: number) => next(x) * 2
    const last = (x: number) => x - 1
    const composed = compose(f1, f2, last)
    expect(composed(3)).toBe(5)
  })
})
