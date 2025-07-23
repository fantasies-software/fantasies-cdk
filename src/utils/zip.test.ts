import { describe, expect, it } from 'vitest'
import { zipToArray, zipToObject } from './zip'

describe('zip.ts', () => {
  describe('zipToArray', () => {
    it('should zip two arrays of equal length', () => {
      const result = zipToArray(['a', 'b'], [1, 2])
      expect(result).toEqual([['a', 1], ['b', 2]])
    })

    it('should zip arrays of different lengths, filling with undefined', () => {
      const result = zipToArray(['a', 'b', 'c'], [1, 2])
      expect(result).toEqual([['a', 1], ['b', 2], ['c', undefined]])
    })

    it('should zip three arrays', () => {
      const result = zipToArray(['a', 'b'], [1, 2], [true, false])
      expect(result).toEqual([['a', 1, true], ['b', 2, false]])
    })

    it('should zip four arrays', () => {
      const result = zipToArray(['a', 'b'], [1, 2], [true, false], [null, undefined])
      expect(result).toEqual([
        ['a', 1, true, null],
        ['b', 2, false, undefined],
      ])
    })

    it('should zip five arrays', () => {
      const result = zipToArray(['a'], [1], [true], [null], ['x'])
      expect(result).toEqual([['a', 1, true, null, 'x']])
    })

    it('should zip six arrays', () => {
      const result = zipToArray(['a'], [1], [true], [null], ['x'], [42])
      expect(result).toEqual([['a', 1, true, null, 'x', 42]])
    })

    it('should zip seven arrays', () => {
      const result = zipToArray(['a'], [1], [true], [null], ['x'], [42], ['y'])
      expect(result).toEqual([['a', 1, true, null, 'x', 42, 'y']])
    })

    it('should zip eight arrays', () => {
      const result = zipToArray(['a'], [1], [true], [null], ['x'], [42], ['y'], [100])
      expect(result).toEqual([['a', 1, true, null, 'x', 42, 'y', 100]])
    })

    it('should zip nine arrays', () => {
      const result = zipToArray(['a'], [1], [true], [null], ['x'], [42], ['y'], [100], ['z'])
      expect(result).toEqual([['a', 1, true, null, 'x', 42, 'y', 100, 'z']])
    })

    it('should zip ten arrays', () => {
      const result = zipToArray(['a'], [1], [true], [null], ['x'], [42], ['y'], [100], ['z'], [999])
      expect(result).toEqual([['a', 1, true, null, 'x', 42, 'y', 100, 'z', 999]])
    })

    it('should handle empty arrays', () => {
      const result = zipToArray([], [])
      expect(result).toEqual([])
    })

    it('should handle one empty array and one non-empty array', () => {
      const result = zipToArray([], [1, 2, 3])
      expect(result).toEqual([[undefined, 1], [undefined, 2], [undefined, 3]])
    })

    it('should handle null/undefined values in arrays', () => {
      const result = zipToArray([null, undefined], [1, 2])
      expect(result).toEqual([[null, 1], [undefined, 2]])
    })

    it('should handle arrays with different types', () => {
      const result = zipToArray([1, 2], ['a', 'b'], [true, false])
      expect(result).toEqual([[1, 'a', true], [2, 'b', false]])
    })

    it('should handle arrays with complex objects', () => {
      const obj1 = { name: 'Alice' }
      const obj2 = { name: 'Bob' }
      const result = zipToArray([obj1], [obj2])
      expect(result).toEqual([[obj1, obj2]])
    })

    it('should handle single element arrays', () => {
      const result = zipToArray(['single'], [42])
      expect(result).toEqual([['single', 42]])
    })

    it('should handle very long arrays', () => {
      const arr1 = Array.from({ length: 1000 }).fill('a')
      const arr2 = Array.from({ length: 1000 }).fill(1)
      const result = zipToArray(arr1, arr2)
      expect(result).toHaveLength(1000)
      expect(result[0]).toEqual(['a', 1])
      expect(result[999]).toEqual(['a', 1])
    })
  })

  describe('zipToObject', () => {
    it('should zip keys and values arrays of equal length', () => {
      expect(zipToObject(['a', 'b'], [1, 2])).toEqual({ a: 1, b: 2 })
    })

    it('should zip keys and values arrays of different lengths', () => {
      expect(zipToObject(['a', 'b', 'c'], [1, 2])).toEqual({ a: 1, b: 2, c: undefined })
    })

    it('should zip keys with a single value', () => {
      expect(zipToObject(['a', 'b'], 42)).toEqual({ a: 42, b: 42 })
    })

    it('should zip keys with a value function', () => {
      expect(zipToObject(['x', 'y'], (key, idx) => `${key}-${idx}`)).toEqual({ x: 'x-0', y: 'y-1' })
    })

    it('should return empty object for empty keys', () => {
      expect(zipToObject([], [1, 2])).toEqual({})
      expect(zipToObject([], 42)).toEqual({})
      expect(zipToObject([], () => 1)).toEqual({})
    })

    it('should handle undefined keys', () => {
      expect(zipToObject(undefined as any, [1, 2])).toEqual({})
    })

    it('should zip keys with undefined values', () => {
      expect(zipToObject(['a', 'b'], undefined)).toEqual({ a: undefined, b: undefined })
    })

    it('should zip keys with null values', () => {
      expect(zipToObject(['a', 'b'], null)).toEqual({ a: null, b: null })
    })

    it('should zip keys with values array containing undefined/null', () => {
      expect(zipToObject(['a', 'b'], [undefined, null])).toEqual({ a: undefined, b: null })
    })

    it('should zip keys with complex values', () => {
      const obj1 = { foo: 1 }
      const obj2 = { bar: 2 }
      expect(zipToObject(['a', 'b'], [obj1, obj2])).toEqual({ a: obj1, b: obj2 })
    })

    it('should zip keys with symbol and number keys', () => {
      const sym = Symbol('s')
      expect(zipToObject([sym, 1], ['x', 'y'])).toEqual({ [sym]: 'x', 1: 'y' })
    })

    it('should zip keys with value function using index', () => {
      expect(zipToObject(['a', 'b', 'c'], (_key, idx) => idx)).toEqual({ a: 0, b: 1, c: 2 })
    })

    it('should zip keys with values array shorter than keys', () => {
      expect(zipToObject(['a', 'b', 'c'], [1])).toEqual({ a: 1, b: undefined, c: undefined })
    })

    it('should zip keys with values array longer than keys', () => {
      expect(zipToObject(['a'], [1, 2, 3])).toEqual({ a: 1 })
    })
  })
})
