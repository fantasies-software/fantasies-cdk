import { describe, expect, it } from 'vitest'
import {
  alphabetical,
  countBy,
  getFirst,
  getLast,
  sort,
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

describe('sort', () => {
  it('sorts numbers ascending', () => {
    expect(sort([3, 1, 2], x => x)).toEqual([1, 2, 3])
  })
  it('sorts numbers descending', () => {
    expect(sort([3, 1, 2], x => x, 'desc')).toEqual([3, 2, 1])
  })
  it('returns [] for non-array', () => {
    expect(sort(null as any, x => x as any)).toEqual([])
  })
})

describe('alphabetical', () => {
  const arr = [{ name: 'Bob' }, { name: 'alice' }, { name: 'Carol' }]
  it('sorts alphabetically ascending (case-insensitive)', () => {
    expect(alphabetical(arr, x => x.name)).toEqual([
      { name: 'alice' },
      { name: 'Bob' },
      { name: 'Carol' },
    ])
  })
  it('sorts alphabetically descending', () => {
    expect(alphabetical(arr, x => x.name, 'desc')).toEqual([
      { name: 'Carol' },
      { name: 'Bob' },
      { name: 'alice' },
    ])
  })
  it('returns [] for non-array', () => {
    expect(alphabetical(null as any, x => (x as any).name)).toEqual([])
  })
})

describe('countBy', () => {
  it('counts by key', () => {
    const arr = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Alice' }]
    expect(countBy(arr, x => x.name)).toEqual({ Alice: 2, Bob: 1 })
  })
  it('returns empty object for non-array', () => {
    expect(countBy(null as any, x => x as any)).toEqual({})
  })
  it('counts numbers', () => {
    expect(countBy([1, 2, 1, 3], x => x)).toEqual({ 1: 2, 2: 1, 3: 1 })
  })
})
