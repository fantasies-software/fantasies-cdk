import { describe, expect, it } from 'vitest'
import {
  isArray,
  isDate,
  isEmpty,
  isEqual,
  isFloat,
  isFunction,
  isInt,
  isNil,
  isNumber,
  isObject,
  isPrimitive,
  isPromise,
  isRegexp,
  isString,
  isSymbol,
} from '../typed'

describe('typed.ts', () => {
  describe('isSymbol', () => {
    it('should return true for symbols', () => {
      expect(isSymbol(Symbol('test'))).toBe(true)
    })
    it('should return false for non-symbols', () => {
      expect(isSymbol('string')).toBe(false)
      expect(isSymbol(123)).toBe(false)
      expect(isSymbol(null)).toBe(false)
    })
  })

  describe('isArray', () => {
    it('should return true for arrays', () => {
      expect(isArray([])).toBe(true)
      expect(isArray([1, 2, 3])).toBe(true)
    })
    it('should return false for non-arrays', () => {
      expect(isArray('string')).toBe(false)
      expect(isArray({})).toBe(false)
      expect(isArray(null)).toBe(false)
    })
  })

  describe('isObject', () => {
    it('should return true for plain objects', () => {
      expect(isObject({})).toBe(true)
      expect(isObject({ key: 'value' })).toBe(true)
    })
    it('should return false for non-objects or non-plain objects', () => {
      expect(isObject([])).toBe(false)
      expect(isObject(null)).toBe(false)
      expect(isObject(() => { })).toBe(false)
    })
  })

  describe('isNil', () => {
    it('should return true for null or undefined', () => {
      expect(isNil(null)).toBe(true)
      expect(isNil(undefined)).toBe(true)
    })
    it('should return false for other values', () => {
      expect(isNil('string')).toBe(false)
      expect(isNil(0)).toBe(false)
    })
  })

  describe('isPrimitive', () => {
    it('should return true for primitive values', () => {
      expect(isPrimitive('string')).toBe(true)
      expect(isPrimitive(123)).toBe(true)
      expect(isPrimitive(true)).toBe(true)
      expect(isPrimitive(Symbol('test'))).toBe(true)
      expect(isPrimitive(null)).toBe(true)
      expect(isPrimitive(undefined)).toBe(true)
    })
    it('should return false for non-primitive values', () => {
      expect(isPrimitive({})).toBe(false)
      expect(isPrimitive([])).toBe(false)
      expect(isPrimitive(() => { })).toBe(false)
    })
  })

  describe('isFunction', () => {
    it('should return true for functions', () => {
      expect(isFunction(() => { })).toBe(true)
      expect(isFunction(() => { })).toBe(true)
    })
    it('should return false for non-functions', () => {
      expect(isFunction('string')).toBe(false)
      expect(isFunction(123)).toBe(false)
    })
  })

  describe('isString', () => {
    it('should return true for strings', () => {
      expect(isString('string')).toBe(true)
    })
    it('should return false for non-strings', () => {
      expect(isString(123)).toBe(false)
      expect(isString(null)).toBe(false)
    })
  })

  describe('isNumber', () => {
    it('should return true for valid numbers', () => {
      expect(isNumber(123)).toBe(true)
      expect(isNumber(0)).toBe(true)
    })
    it('should return false for NaN or non-numbers', () => {
      expect(isNumber(Number.NaN)).toBe(false)
      expect(isNumber('string')).toBe(false)
    })
  })

  describe('isInt', () => {
    it('should return true for integers', () => {
      expect(isInt(123)).toBe(true)
      expect(isInt(0)).toBe(true)
    })
    it('should return false for floats or non-numbers', () => {
      expect(isInt(123.45)).toBe(false)
      expect(isInt('string')).toBe(false)
    })
  })

  describe('isFloat', () => {
    it('should return true for floats', () => {
      expect(isFloat(123.45)).toBe(true)
    })
    it('should return false for integers or non-numbers', () => {
      expect(isFloat(123)).toBe(false)
      expect(isFloat('string')).toBe(false)
    })
  })

  describe('isDate', () => {
    it('should return true for valid Date objects', () => {
      expect(isDate(new Date())).toBe(true)
    })
    it('should return false for invalid Date objects or non-dates', () => {
      expect(isDate(new Date('invalid'))).toBe(false)
      expect(isDate('string')).toBe(false)
    })
  })

  describe('isRegexp', () => {
    it('should return true for RegExp objects', () => {
      expect(isRegexp(/test/)).toBe(true)
    })
    it('should return false for non-RegExp objects', () => {
      expect(isRegexp('string')).toBe(false)
      expect(isRegexp(123)).toBe(false)
    })
  })

  describe('isPromise', () => {
    it('should return true for Promise objects', () => {
      expect(isPromise(Promise.resolve())).toBe(true)
    })
    it('should return false for non-Promise objects', () => {
      expect(isPromise('string')).toBe(false)
      expect(isPromise(123)).toBe(false)
    })
  })

  describe('isEmpty', () => {
    it('should return true for empty values', () => {
      expect(isEmpty(null)).toBe(true)
      expect(isEmpty(undefined)).toBe(true)
      expect(isEmpty('')).toBe(true)
      expect(isEmpty([])).toBe(true)
      expect(isEmpty({})).toBe(true)
    })
    it('should return false for non-empty values', () => {
      expect(isEmpty('string')).toBe(false)
      expect(isEmpty([1, 2, 3])).toBe(false)
      expect(isEmpty({ key: 'value' })).toBe(false)
    })

    it('should return false for array-like object with length > 0 and no indexed props', () => {
      expect(isEmpty({ length: 1 })).toBe(false)
    })

    it('should return false for object with keys', () => {
      expect(isEmpty({ a: 1 })).toBe(false)
    })
  })

  describe('isEqual', () => {
    it('should return true for deeply equal values', () => {
      expect(isEqual(123, 123)).toBe(true)
      expect(isEqual({ key: 'value' }, { key: 'value' })).toBe(true)
      expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true)
    })
    it('should return false for non-equal values', () => {
      expect(isEqual(123, 456)).toBe(false)
      expect(isEqual({ key: 'value' }, { key: 'different' })).toBe(false)
      expect(isEqual([1, 2, 3], [4, 5, 6])).toBe(false)
    })

    it('should return false if object is missing a key', () => {
      const pre = { a: 1, b: 2 }
      const next = { a: 1 }
      expect(isEqual(pre, next)).toBe(false)
    })

    it('should return false if object values are not equal', () => {
      const pre = { a: 1, b: 2 }
      const next = { a: 1, b: 3 }
      expect(isEqual(pre, next)).toBe(false)
    })
  })
})

describe('typed.ts additional tests for full coverage', () => {
  describe('isEmpty', () => {
    it('should return true for empty Map', () => {
      expect(isEmpty(new Map())).toBe(true)
    })
    it('should return false for non-empty Map', () => {
      const map = new Map()
      map.set('key', 'value')
      expect(isEmpty(map)).toBe(false)
    })

    it('should return true for empty Set', () => {
      expect(isEmpty(new Set())).toBe(true)
    })
    it('should return false for non-empty Set', () => {
      const set = new Set()
      set.add('value')
      expect(isEmpty(set)).toBe(false)
    })

    it('should return true for invalid Date objects', () => {
      expect(isEmpty(new Date('invalid'))).toBe(true)
    })
    it('should return false for valid Date objects', () => {
      expect(isEmpty(new Date())).toBe(false)
    })
  })

  describe('isEqual', () => {
    it('should return true for deeply equal objects with different key orders', () => {
      const obj1 = { a: 1, b: 2 }
      const obj2 = { b: 2, a: 1 }
      expect(isEqual(obj1, obj2)).toBe(true)
    })

    it('should return false for objects with different keys', () => {
      const obj1 = { a: 1, b: 2 }
      const obj2 = { a: 1, c: 3 } as any
      expect(isEqual(obj1, obj2)).toBe(false)
    })

    it('should return true for deeply equal arrays with nested objects', () => {
      const arr1 = [{ a: 1 }, { b: 2 }]
      const arr2 = [{ a: 1 }, { b: 2 }]
      expect(isEqual(arr1, arr2)).toBe(true)
    })

    it('should return false for arrays with different nested objects', () => {
      const arr1 = [{ a: 1 }, { b: 2 }]
      const arr2 = [{ a: 1 }, { b: 3 }]
      expect(isEqual(arr1, arr2)).toBe(false)
    })

    it('should handle arrays with different lengths', () => {
      const arr1 = [1, 2, 3]
      const arr2 = [1, 2]
      expect(isEqual(arr1, arr2)).toBe(false)
    })

    it('should handle Date objects comparison', () => {
      const date1 = new Date('2023-01-01')
      const date2 = new Date('2023-01-01')
      const date3 = new Date('2023-01-02')
      expect(isEqual(date1, date2)).toBe(true)
      expect(isEqual(date1, date3)).toBe(false)
    })

    it('should handle RegExp objects comparison', () => {
      const regex1 = /test/g
      const regex2 = /test/g
      const regex3 = /test/i
      expect(isEqual(regex1, regex2)).toBe(true)
      expect(isEqual(regex1, regex3)).toBe(false)
    })

    it('should handle objects with symbol keys', () => {
      const sym1 = Symbol('test')
      const sym2 = Symbol('test')
      const obj1 = { [sym1]: 'value' }
      const obj2 = { [sym1]: 'value' }
      const obj3 = { [sym2]: 'value' } as any
      expect(isEqual(obj1, obj2)).toBe(true)
      expect(isEqual(obj1, obj3)).toBe(false)
    })

    it('should handle primitive values comparison', () => {
      expect(isEqual('string', 'string')).toBe(true)
      expect(isEqual('string', 'other')).toBe(false)
      expect(isEqual(123, 123)).toBe(true)
      expect(isEqual(123, 456)).toBe(false)
      expect(isEqual(true, true)).toBe(true)
      expect(isEqual(true, false)).toBe(false)
    })

    it('should handle NaN comparison', () => {
      expect(isEqual(Number.NaN, Number.NaN)).toBe(true)
    })

    it('should handle mixed type comparisons', () => {
      expect(isEqual('123' as any, 123 as any)).toBe(false)
      expect(isEqual(null as any, undefined as any)).toBe(false)
      expect(isEqual({} as any, [] as any)).toBe(false)
    })

    it('should handle objects with different number of keys', () => {
      const obj1 = { a: 1 }
      const obj2 = { a: 1, b: 2 } as any
      expect(isEqual(obj1, obj2)).toBe(false)
    })

    it('should handle nested arrays within objects', () => {
      const obj1 = { arr: [1, 2, 3] }
      const obj2 = { arr: [1, 2, 3] }
      const obj3 = { arr: [1, 2, 4] }
      expect(isEqual(obj1, obj2)).toBe(true)
      expect(isEqual(obj1, obj3)).toBe(false)
    })

    it('should handle complex nested structures', () => {
      const complex1 = {
        a: 1,
        b: {
          c: [1, 2, { d: 'test' }],
          e: new Date('2023-01-01'),
        },
      }
      const complex2 = {
        a: 1,
        b: {
          c: [1, 2, { d: 'test' }],
          e: new Date('2023-01-01'),
        },
      }
      const complex3 = {
        a: 1,
        b: {
          c: [1, 2, { d: 'different' }],
          e: new Date('2023-01-01'),
        },
      }
      expect(isEqual(complex1, complex2)).toBe(true)
      expect(isEqual(complex1, complex3)).toBe(false)
    })
  })

  describe('isEmpty additional edge cases', () => {
    it('should return false for boolean values', () => {
      expect(isEmpty(true)).toBe(false)
      expect(isEmpty(false)).toBe(false)
    })

    it('should return true for number 0', () => {
      expect(isEmpty(0)).toBe(true)
    })

    it('should return false for non-zero numbers', () => {
      expect(isEmpty(1)).toBe(false)
      expect(isEmpty(-1)).toBe(false)
      expect(isEmpty(0.1)).toBe(false)
    })

    it('should return false for symbols', () => {
      expect(isEmpty(Symbol('test'))).toBe(false)
    })

    it('should return false for functions', () => {
      expect(isEmpty(() => { })).toBe(false)
      expect(isEmpty(() => { })).toBe(false)
    })

    it('should handle array-like objects with length property', () => {
      const arrayLike = { length: 0 }
      const arrayLikeWithItems = { length: 2, 0: 'a', 1: 'b' }
      expect(isEmpty(arrayLike)).toBe(true)
      expect(isEmpty(arrayLikeWithItems)).toBe(false)
    })

    it('should handle WeakMap and WeakSet (no size property)', () => {
      const weakMap = new WeakMap()
      const weakSet = new WeakSet()
      expect(isEmpty(weakMap)).toBe(true)
      expect(isEmpty(weakSet)).toBe(true)
    })
  })

  describe('isPromise additional tests', () => {
    it('should return true for thenable objects', () => {
      const thenable = {
        then: () => { },
        catch: () => { },
      }
      expect(isPromise(thenable)).toBe(true)
    })

    it('should return false for objects with only then method', () => {
      const notPromise = {
        then: () => { },
      }
      expect(isPromise(notPromise)).toBe(false)
    })

    it('should return false for objects with only catch method', () => {
      const notPromise = {
        catch: () => { },
      }
      expect(isPromise(notPromise)).toBe(false)
    })
  })

  describe('isObject additional tests', () => {
    it('should return false for Date objects', () => {
      expect(isObject(new Date())).toBe(false)
    })

    it('should return false for RegExp objects', () => {
      expect(isObject(/test/)).toBe(false)
    })

    it('should return false for Map objects', () => {
      expect(isObject(new Map())).toBe(false)
    })

    it('should return false for Set objects', () => {
      expect(isObject(new Set())).toBe(false)
    })

    it('should return false for class instances', () => {
      class TestClass { }
      expect(isObject(new TestClass())).toBe(false)
    })
  })

  describe('isNumber additional tests', () => {
    it('should return true for negative numbers', () => {
      expect(isNumber(-123)).toBe(true)
      expect(isNumber(-0.5)).toBe(true)
    })

    it('should return true for Infinity', () => {
      expect(isNumber(Infinity)).toBe(true)
      expect(isNumber(-Infinity)).toBe(true)
    })

    it('should return false for numeric strings', () => {
      expect(isNumber('123')).toBe(false)
      expect(isNumber('0')).toBe(false)
    })
  })

  describe('isInt additional tests', () => {
    it('should return true for negative integers', () => {
      expect(isInt(-123)).toBe(true)
      expect(isInt(-0)).toBe(true)
    })

    it('should return false for Infinity', () => {
      expect(isInt(Infinity)).toBe(false)
      expect(isInt(-Infinity)).toBe(false)
    })
  })

  describe('isFloat additional tests', () => {
    it('should return true for negative floats', () => {
      expect(isFloat(-123.45)).toBe(true)
      expect(isFloat(-0.1)).toBe(true)
    })

    it('should return true for very small numbers', () => {
      expect(isFloat(0.000001)).toBe(true)
    })

    it('should return false for NaN', () => {
      expect(isFloat(Number.NaN)).toBe(false)
    })
  })
})
