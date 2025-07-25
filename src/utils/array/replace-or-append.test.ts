import { describe, expect, it } from 'vitest'

import { replaceOrAppend } from './replace-or-append'

describe('replaceOrAppend', () => {
  it('should append if not found', () => {
    const arr = [1, 2, 3]
    const result = replaceOrAppend(arr, 4, v => v === 4)
    expect(result).toEqual([1, 2, 3, 4])
  })

  it('should replace if found', () => {
    const arr = [1, 2, 3]
    const result = replaceOrAppend(arr, 9, v => v === 2)
    expect(result).toEqual([1, 9, 3])
  })

  it('should return [] if both list and newItem are falsy', () => {
    expect(replaceOrAppend(undefined as any, undefined as any, () => false)).toEqual([])
    expect(replaceOrAppend(null as any, null as any, () => false)).toEqual([])
  })

  it('should return list if newItem is falsy', () => {
    expect(replaceOrAppend([1, 2], undefined as any, () => false)).toEqual([1, 2])
    expect(replaceOrAppend([1, 2], null as any, () => false)).toEqual([1, 2])
  })

  it('should return [newItem] if list is falsy', () => {
    expect(replaceOrAppend(undefined as any, 5, () => false)).toEqual([5])
    expect(replaceOrAppend(null as any, 6, () => false)).toEqual([6])
  })

  it('should append if list is empty', () => {
    expect(replaceOrAppend([], 7, () => false)).toEqual([7])
  })
})
