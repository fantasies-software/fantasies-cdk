import { describe, expect, it } from 'vitest'
import { replaceAllArrayByItem, replaceArrayByItem } from './replace'

describe('replaceAllArrayByItem', () => {
  it('replaces all matching items', () => {
    const arr: number[] = [1, 2, 3, 2, 4]
    const result = replaceAllArrayByItem(arr, 0, item => item === 2)
    expect(result).toEqual([1, 0, 3, 0, 4])
  })

  it('returns empty array if input is not array', () => {
    expect(replaceAllArrayByItem(null as any, 0, () => true)).toEqual([])
  })

  it('returns original array if item is falsy', () => {
    const arr = [1, 2, 3]
    expect(replaceAllArrayByItem(arr, undefined as any, () => true)).toEqual([1, 2, 3])
  })

  it('returns original array if no match', () => {
    const arr = [1, 2, 3]
    const result = replaceAllArrayByItem(arr, 0, item => item === 5)
    expect(result).toEqual([1, 2, 3])
  })
})

describe('replaceArrayByItem', () => {
  it('replaces first matching item', () => {
    const arr = [1, 2, 3, 2, 4]
    const result = replaceArrayByItem(arr, 0, item => item === 2)
    expect(result).toEqual([1, 0, 3, 2, 4])
  })

  it('returns empty array if input is not array', () => {
    expect(replaceArrayByItem(null as any, 0, () => true)).toEqual([])
  })

  it('returns original array if item is falsy', () => {
    const arr = [1, 2, 3]
    expect(replaceArrayByItem(arr, undefined as any, () => true)).toEqual([1, 2, 3])
  })

  it('returns original array if no match', () => {
    const arr = [1, 2, 3]
    const result = replaceArrayByItem(arr, 0, item => item === 5)
    expect(result).toEqual([1, 2, 3])
  })
})
