import { describe, expect, it } from 'vitest'
import { lowerize } from '../lowerize'

describe('lowerize', () => {
  it('converts all keys to lowercase', () => {
    expect(lowerize({ A: 1, B: 2 })).toEqual({ a: 1, b: 2 })
  })
})
