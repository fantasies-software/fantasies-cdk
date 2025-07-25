import { describe, expect, it } from 'vitest'
import { zipToObject } from './zip-to-object'

describe('zipToObject', () => {
  it('should combine keys and values into an object', () => {
    const result = zipToObject(['a', 'b'], [1, 2])
    expect(result).toEqual({ a: 1, b: 2 })
  })
  it('should handle a single value for all keys', () => {
    const result = zipToObject(['a', 'b'], 42)
    expect(result).toEqual({ a: 42, b: 42 })
  })
  it('should handle a function that returns values based on keys', () => {
    const result = zipToObject(['a', 'b'], key => key === 'a' ? 1 : 2)
    expect(result).toEqual({ a: 1, b: 2 })
  })
  it('should handle an empty keys array', () => {
    const result = zipToObject([], [])
    expect(result).toEqual({})
  })
  it('should handle keys with mixed types', () => {
    const result = zipToObject(['a', 1, 'b'], [true, false, true])
    expect(result).toEqual({ a: true, 1: false, b: true })
  })
  it('should handle keys as symbols', () => {
    const sym1 = Symbol('a')
    const sym2 = Symbol('b')
    const result = zipToObject([sym1, sym2], [1, 2])
    expect(result).toEqual({ [sym1]: 1, [sym2]: 2 })
  })
  it('should handle keys as numbers', () => {
    const result = zipToObject([1, 2], ['one', 'two'])
    expect(result).toEqual({ 1: 'one', 2: 'two' })
  })
  it('should return an empty object if keys are not provided', () => {
    const result = zipToObject([], undefined as any)
    expect(result).toEqual({})
  })
  it('should return an empty object if values are not provided', () => {
    const result = zipToObject(['a', 'b'], undefined as any)
    expect(result).toEqual({})
  })
  it('should handle keys and values of different lengths', () => {
    const result = zipToObject(['a', 'b', 'c'], [1, 2])
    expect(result).toEqual({ a: 1, b: 2, c: undefined })
  })
  it('should handle values as undefined or null', () => {
    expect(zipToObject(['a', 'b'], undefined as any)).toEqual({ a: undefined, b: undefined })
    expect(zipToObject(['a', 'b'], null as any)).toEqual({ a: null, b: null })
  })
  it('should return empty object if keys are null or undefined', () => {
    expect(zipToObject(null as any, [1, 2])).toEqual({})
    expect(zipToObject(undefined as any, [1, 2])).toEqual({})
  })
  it('should ignore extra values if values array is longer than keys', () => {
    expect(zipToObject(['a', 'b'], [1, 2, 3])).toEqual({ a: 1, b: 2 })
  })
})
