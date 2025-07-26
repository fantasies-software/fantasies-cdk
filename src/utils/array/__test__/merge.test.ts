import { describe, expect, it } from 'vitest'
import { merge } from '../merge'

describe('merge', () => {
  it('should merge two arrays based on a matcher function', () => {
    const root = [1, 2, 3]
    const others = [2, 3, 4]
    const result = merge(root, others, n => n)
    expect(result).toEqual([1, 2, 3])
  })

  it('should merge two arrays of objects based on a matcher function', () => {
    const root = [{ id: 1 }, { id: 2 }]
    const others = [{ id: 2 }, { id: 3 }]
    const result = merge(root, others, item => item.id)
    expect(result).toEqual([{ id: 1 }, { id: 2 }])
  })

  it('should merge two arrays of objects with complex properties', () => {
    const root = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
    const others = [{ id: 2, name: 'c' }, { id: 3, name: 'd' }]
    const result = merge(root, others, item => item.id)
    expect(result).toEqual([{ id: 1, name: 'a' }, { id: 2, name: 'c' }])
  })

  it('should return an empty array when both arrays are empty', () => {
    const result = merge([], [], n => n)
    expect(result).toEqual([])
  })

  it('should return the root array when others is empty', () => {
    const root = [1, 2, 3]
    const result = merge(root, [], n => n)
    expect(result).toEqual(root)
  })

  it('should return an empty array when root is empty', () => {
    const others = [1, 2, 3]
    const result = merge([], others, n => n)
    expect(result).toEqual([])
  })

  it('should handle cases where no matches are found', () => {
    const root = [1, 2, 3]
    const others = [4, 5, 6]
    const result = merge(root, others, n => n)
    expect(result).toEqual([1, 2, 3])
  })

  it('should handle cases where all items match', () => {
    const root = [1, 2, 3]
    const others = [1, 2, 3]
    const result = merge(root, others, n => n)
    expect(result).toEqual([1, 2, 3])
  })

  it('should handle cases with complex objects and no matches', () => {
    const root = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
    const others = [{ id: 3, name: 'c' }, { id: 4, name: 'd' }]
    const result = merge(root, others, item => item.id)
    expect(result).toEqual([{ id: 1, name: 'a' }, { id: 2, name: 'b' }])
  })

  it('should return root when matcher is null', () => {
    const root = [1, 2, 3]
    const others = [2, 3, 4]
    const result = merge(root, others, null as any)
    expect(result).toEqual(root)
  })

  it('should return root when others is null', () => {
    const root = [1, 2, 3]
    const result = merge(root, null as any, n => n)
    expect(result).toEqual(root)
  })

  it('should return empty array when root is null', () => {
    const others = [1, 2, 3]
    const result = merge(null as any, others, n => n)
    expect(result).toEqual([])
  })

  it('should handle non-array inputs gracefully', () => {
    const result = merge(null as any, null as any, n => n)
    expect(result).toEqual([])
  })
})
