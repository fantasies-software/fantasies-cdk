import { describe, expect, it } from 'vitest'
import { alphabetical, sort } from './sort'

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
