import { describe, expect, it } from 'vitest'
import {
  getFirst,
  getLast,
  selectMap,
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

describe('selectMap', () => {
  it('returns empty array if input is not array', () => {
    expect(selectMap(null as any, () => true, x => x)).toEqual([])
  })

  it('returns empty array if condition is not a function', () => {
    expect(selectMap([1, 2, 3], null as any, x => x)).toEqual([])
  })

  it('returns mapped array for matching items', () => {
    const arr = [1, 2, 3, 4]
    const result = selectMap(arr, item => item > 2, item => item * 2)
    expect(result).toEqual([6, 8])
  })

  it('returns empty array if no items match', () => {
    const arr = [1, 2]
    const result = selectMap(arr, item => item > 10, item => item * 2)
    expect(result).toEqual([])
  })

  it('works with index in condition and mapper', () => {
    const arr = [10, 20, 30]
    const result = selectMap(arr, (item, idx) => idx === 1, (item, idx) => item + idx)
    expect(result).toEqual([21])
  })
})
