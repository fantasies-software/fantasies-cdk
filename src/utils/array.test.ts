import { describe, expect, it } from 'vitest'
import {
  getFirst,
  getLast,
  toDic,
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

describe('toDic', () => {
  const array = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]

  it('should be 1:"Alice", 2: "Bob"', () => {
    expect(toDic(array, item => item.id, item => item.name)).toEqual({ 1: 'Alice', 2: 'Bob' })
  })

  it('should be 1:{ id: 1, name: "Alice" }, 2: { id: 2, name: "Bob" }', () => {
    expect(toDic(array, item => item.id)).toEqual({ 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' } })
  })

  it('should return empty object for non-array input', () => {
    expect(toDic(null as any, (item: any) => item.id)).toEqual({})
  })

  it('should return empty object if getKey or getValue is not a function', () => {
    expect(toDic(array, null as any)).toEqual({})
    expect(toDic(array, item => item.id, null as any)).toEqual({})
  })
})
