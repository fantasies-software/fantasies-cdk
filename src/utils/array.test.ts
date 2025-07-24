import { describe, expect, it } from 'vitest'
import {
  getFirst,
  getLast,
} from './array'

describe('getFirst', () => {
  it('returns first element', () => {
    expect(getFirst([1, 2, 3])).toBe(1)
  })
  it('returns default value for empty array', () => {
    expect(getFirst([], 99)).toBe(99)
  })
  it('returns null for empty array without default', () => {
    expect(getFirst([])).toBeNull()
  })
})

describe('getLast', () => {
  it('returns last element', () => {
    expect(getLast([1, 2, 3])).toBe(3)
  })
  it('returns default value for empty array', () => {
    expect(getLast([], 88)).toBe(88)
  })
  it('returns null for empty array without default', () => {
    expect(getLast([])).toBeNull()
  })
})
