import { describe, expect, it } from 'vitest'
import { zipAll } from './zip'

describe('zip.ts', () => {
  describe('zipAll', () => {
    it('should zip two arrays of equal length', () => {
      const result = zipAll(['a', 'b'], [1, 2])
      expect(result).toEqual([['a', 1], ['b', 2]])
    })

    it('should zip arrays of different lengths, filling with undefined', () => {
      const result = zipAll(['a', 'b', 'c'], [1, 2])
      expect(result).toEqual([['a', 1], ['b', 2], ['c', undefined]])
    })

    it('should zip three arrays', () => {
      const result = zipAll(['a', 'b'], [1, 2], [true, false])
      expect(result).toEqual([['a', 1, true], ['b', 2, false]])
    })

    it('should zip four arrays', () => {
      const result = zipAll(['a', 'b'], [1, 2], [true, false], [null, undefined])
      expect(result).toEqual([
        ['a', 1, true, null],
        ['b', 2, false, undefined],
      ])
    })

    it('should zip five arrays', () => {
      const result = zipAll(['a'], [1], [true], [null], ['x'])
      expect(result).toEqual([['a', 1, true, null, 'x']])
    })

    it('should zip six arrays', () => {
      const result = zipAll(['a'], [1], [true], [null], ['x'], [42])
      expect(result).toEqual([['a', 1, true, null, 'x', 42]])
    })

    it('should zip seven arrays', () => {
      const result = zipAll(['a'], [1], [true], [null], ['x'], [42], ['y'])
      expect(result).toEqual([['a', 1, true, null, 'x', 42, 'y']])
    })

    it('should zip eight arrays', () => {
      const result = zipAll(['a'], [1], [true], [null], ['x'], [42], ['y'], [100])
      expect(result).toEqual([['a', 1, true, null, 'x', 42, 'y', 100]])
    })

    it('should zip nine arrays', () => {
      const result = zipAll(['a'], [1], [true], [null], ['x'], [42], ['y'], [100], ['z'])
      expect(result).toEqual([['a', 1, true, null, 'x', 42, 'y', 100, 'z']])
    })

    it('should zip ten arrays', () => {
      const result = zipAll(['a'], [1], [true], [null], ['x'], [42], ['y'], [100], ['z'], [999])
      expect(result).toEqual([['a', 1, true, null, 'x', 42, 'y', 100, 'z', 999]])
    })

    it('should handle empty arrays', () => {
      const result = zipAll([], [])
      expect(result).toEqual([])
    })

    it('should handle one empty array and one non-empty array', () => {
      const result = zipAll([], [1, 2, 3])
      expect(result).toEqual([[undefined, 1], [undefined, 2], [undefined, 3]])
    })

    it('should handle null/undefined values in arrays', () => {
      const result = zipAll([null, undefined], [1, 2])
      expect(result).toEqual([[null, 1], [undefined, 2]])
    })

    it('should handle arrays with different types', () => {
      const result = zipAll([1, 2], ['a', 'b'], [true, false])
      expect(result).toEqual([[1, 'a', true], [2, 'b', false]])
    })

    it('should handle arrays with complex objects', () => {
      const obj1 = { name: 'Alice' }
      const obj2 = { name: 'Bob' }
      const result = zipAll([obj1], [obj2])
      expect(result).toEqual([[obj1, obj2]])
    })

    it('should handle single element arrays', () => {
      const result = zipAll(['single'], [42])
      expect(result).toEqual([['single', 42]])
    })

    it('should handle very long arrays', () => {
      const arr1 = Array.from({ length: 1000 }).fill('a')
      const arr2 = Array.from({ length: 1000 }).fill(1)
      const result = zipAll(arr1, arr2)
      expect(result).toHaveLength(1000)
      expect(result[0]).toEqual(['a', 1])
      expect(result[999]).toEqual(['a', 1])
    })
  })
})
