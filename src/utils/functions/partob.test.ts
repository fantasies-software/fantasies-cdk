import { describe, expect, it } from 'vitest'
import { partob } from './partob'

describe('partob', () => {
  it('should partially apply object arguments', () => {
    const fn = (args: { a: number, b: number, c: number }) => args.a + args.b + args.c
    const p = partob(fn, { a: 1 })
    expect(p({ b: 2, c: 3 })).toBe(6)
    const p2 = partob(fn, { a: 1, b: 2 })
    expect(p2({ c: 3 })).toBe(6)
  })
})
