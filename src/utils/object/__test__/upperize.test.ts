import { describe, expect, it } from 'vitest'
import { upperize } from '../upperize'

describe('upperize', () => {
  it('converts all keys to uppercase', () => {
    expect(upperize({ a: 1, b: 2 })).toEqual({ A: 1, B: 2 })
  })
})
