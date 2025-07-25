import { describe, expect, it } from 'vitest'
import { diff } from '../diff'

describe('diff', () => {
  it('should return added and removed', () => {
    const a = [1, 2, 3]
    const b = [2, 3, 4]
    const result = diff(a, b)
    expect(result).toEqual([1])
  })

  it('should return [] if both root and other are empty', () => {
    expect(diff([], [])).toEqual([])
  })

  it('should return other if root is undefined', () => {
    expect(diff(undefined as any, [1, 2])).toEqual([1, 2])
  })

  it('should return root if other is empty', () => {
    expect(diff([1, 2], [])).toEqual([1, 2])
  })

  it('should use custom identity', () => {
    const a = [{ id: 1 }, { id: 2 }]
    const b = [{ id: 2 }]
    expect(diff(a, b, x => x.id)).toEqual([{ id: 1 }])
  })
})
