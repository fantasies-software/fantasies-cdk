import { describe, expect, it } from 'vitest'
import { intersects } from '../intersects'

describe('intersects', () => {
  it('should return true for intersecting arrays with primitive values', () => {
    const array1 = [1, 2, 3]
    const array2 = [3, 4, 5]
    const result = intersects(array1, array2)
    expect(result).toBe(true)
  })

  it('should return false for non-intersecting arrays with primitive values', () => {
    const array1 = [1, 2, 3]
    const array2 = [4, 5, 6]
    const result = intersects(array1, array2)
    expect(result).toBe(false)
  })

  it('should return true for intersecting arrays with objects based on a primary key', () => {
    const array1 = [{ id: 1 }, { id: 2 }]
    const array2 = [{ id: 2 }, { id: 3 }]
    const result = intersects(array1, array2, item => item.id)
    expect(result).toBe(true)
  })

  it('should return false for non-intersecting arrays with objects based on a primary key', () => {
    const array1 = [{ id: 1 }, { id: 2 }]
    const array2 = [{ id: 3 }, { id: 4 }]
    const result = intersects(array1, array2, item => item.id)
    expect(result).toBe(false)
  })

  it('should return false if either array is not an array', () => {
    const array1 = [1, 2, 3]
    const array2 = null as any
    const result = intersects(array1, array2)
    expect(result).toBe(false)

    const resultUndefined = intersects(undefined as any, array1)
    expect(resultUndefined).toBe(false)
  })
})
