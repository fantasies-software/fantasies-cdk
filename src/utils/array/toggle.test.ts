import { describe, expect, it } from 'vitest'
import { toggle } from './toggle'

describe('toggle', () => {
  it('should add item if not present', () => {
    expect(toggle([1, 2], 3)).toEqual([1, 2, 3])
  })
  it('should remove item if present', () => {
    expect(toggle([1, 2, 3], 2)).toEqual([1, 3])
  })
  it('should return empty array if both list and item are falsy', () => {
    // @ts-expect-error testing falsy
    expect(toggle(undefined, undefined)).toEqual([])
  })
  it('should return array with item if list is falsy', () => {
    // @ts-expect-error testing falsy
    expect(toggle(undefined, 1)).toEqual([1])
  })
  it('should return copy of list if item is falsy', () => {
    expect(toggle([1, 2], undefined)).toEqual([1, 2])
  })
  it('should use toKey for matching', () => {
    const list = [{ id: 1 }, { id: 2 }]
    const item = { id: 2 }
    const toKey = (x: { id: number }) => x.id
    expect(toggle(list, item, toKey)).toEqual([{ id: 1 }])
    expect(toggle(list, { id: 3 }, toKey)).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }])
  })
  it('should prepend item if strategy is prepend', () => {
    expect(toggle([1, 2], 3, undefined, { strategy: 'prepend' })).toEqual([3, 1, 2])
  })
  it('should append item if strategy is append', () => {
    expect(toggle([1, 2], 3, undefined, { strategy: 'append' })).toEqual([1, 2, 3])
  })
  it('should default to append if strategy is not specified', () => {
    expect(toggle([1, 2], 3)).toEqual([1, 2, 3])
  })
})
