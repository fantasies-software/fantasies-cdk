import { describe, expect, it } from 'vitest'
import { unique } from '../unique'

describe('unique', () => {
  it('should remove duplicate items based on a key function', () => {
    const result = unique([{ id: 1 }, { id: 2 }, { id: 1 }], item => item.id)
    expect(result).toEqual([{ id: 1 }, { id: 2 }])
  })

  it('should return an empty array if input is not an array', () => {
    const result = unique(null as any, (item: any) => item.id)
    expect(result).toEqual([])
  })

  it('should return empty array for invalid array input', () => {
    expect(unique(null as any, item => (item as any).id)).toEqual([])
    expect(unique(undefined as any, item => (item as any).id)).toEqual([])
  })

  it('should return the same array if no duplicates are found', () => {
    const result = unique([{ id: 1 }, { id: 2 }], item => item.id)
    expect(result).toEqual([{ id: 1 }, { id: 2 }])
  })
  it('should remove duplicates when no key function is provided (primitive values)', () => {
    expect(unique([1, 2, 1, 3])).toEqual([1, 2, 3])
    expect(unique(['a', 'b', 'a'])).toEqual(['a', 'b'])
  })
})
