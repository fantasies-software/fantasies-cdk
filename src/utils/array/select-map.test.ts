import { describe, expect, it } from 'vitest'
import { selectMap } from './select-map'

describe('selectMap', () => {
  it('should select and map items based on condition', () => {
    const result = selectMap([1, 2, 3, 4], item => item > 2, item => item * 2)
    expect(result).toEqual([6, 8])
  })

  it('should return an empty array if no items match the condition', () => {
    const result = selectMap([1, 2, 3], item => item > 5, item => item * 2)
    expect(result).toEqual([])
  })

  it('should handle an empty array', () => {
    const result = selectMap([], item => item > 0, (item: any) => item * 2)
    expect(result).toEqual([])
  })

  it('should handle a single element that matches the condition', () => {
    const result = selectMap([5], item => item > 0, item => item * 2)
    expect(result).toEqual([10])
  })

  it('should handle a single element that does not match the condition', () => {
    const result = selectMap([1], item => item > 1, item => item * 2)
    expect(result).toEqual([])
  })

  it('should return empty array for invalid array input', () => {
    expect(selectMap(null as any, _item => true, _item => _item)).toEqual([])
    expect(selectMap(undefined as any, _item => true, _item => _item)).toEqual([])
  })

  it('should return empty array for invalid condition function', () => {
    expect(selectMap([1, 2, 3], null as any, item => item)).toEqual([])
    expect(selectMap([1, 2, 3], undefined as any, item => item)).toEqual([])
  })
})
