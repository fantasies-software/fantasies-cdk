import { describe, expect, it } from 'vitest'
import { zipToArray } from './zip-to-array'

describe('zipToArray', () => {
  it('should zip two arrays into an array of pairs', () => {
    const result = zipToArray(['a', 'b'], [1, 2])
    expect(result).toEqual([['a', 1], ['b', 2]])
  })

  it('should zip three arrays into an array of triplets', () => {
    const result = zipToArray(['a', 'b'], [1, 2], [true, false])
    expect(result).toEqual([['a', 1, true], ['b', 2, false]])
  })

  it('should zip four arrays into an array of quadruplets', () => {
    const result = zipToArray(['a', 'b'], [1, 2], [true, false], ['x', 'y'])
    expect(result).toEqual([['a', 1, true, 'x'], ['b', 2, false, 'y']])
  })

  it('should zip five arrays into an array of quintuplets', () => {
    const result = zipToArray(['a', 'b'], [1, 2], [true, false], ['x', 'y'], [10, 20])
    expect(result).toEqual([['a', 1, true, 'x', 10], ['b', 2, false, 'y', 20]])
  })

  it('should zip six arrays into an array of sextuplets', () => {
    const result = zipToArray(['a', 'b'], [1, 2], [true, false], ['x', 'y'], [10, 20], ['one', 'two'])
    expect(result).toEqual([['a', 1, true, 'x', 10, 'one'], ['b', 2, false, 'y', 20, 'two']])
  })

  it('should zip seven arrays into an array of septuplets', () => {
    const result = zipToArray(['a', 'b'], [1, 2], [true, false], ['x', 'y'], [10, 20], ['one', 'two'], ['alpha', 'beta'])
    expect(result).toEqual([['a', 1, true, 'x', 10, 'one', 'alpha'], ['b', 2, false, 'y', 20, 'two', 'beta']])
  })

  it('should return empty array for empty input or non-array arguments', () => {
    expect(zipToArray({} as any, [])).toEqual([])
    expect(zipToArray([], [])).toEqual([])
    expect(zipToArray([], null as any)).toEqual([])
    expect(zipToArray([], undefined as any)).toEqual([])
  })

  it('should zip arrays of different lengths, filling with undefined', () => {
    const result = zipToArray(['a', 'b'], [1])
    expect(result).toEqual([
      ['a', 1],
      ['b', undefined],
    ])
  })
  it('should return empty array when all arguments are empty arrays', () => {
    expect(zipToArray([], [], [])).toEqual([])
  })

  it('should return empty array', () => {
    expect(zipToArray({} as any, {} as any)).toEqual([])
  })
})
