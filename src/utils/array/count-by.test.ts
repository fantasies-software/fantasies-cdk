import { describe, expect, it } from 'vitest'
import { countBy } from './count-by'

describe('countBy', () => {
  it('should count occurrences of items in an array based on a key', () => {
    const input = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Alice' }]
    const result = countBy(input, item => item.name)
    expect(result).toEqual({ Alice: 2, Bob: 1 })
  })

  it('should return an empty object for an empty array', () => {
    const input: any[] = []
    const result = countBy(input, item => item.name)
    expect(result).toEqual({})
  })

  it('should return an empty object for a non-array input', () => {
    const input: any = null
    const result = countBy(input, item => (item as any).name)
    expect(result).toEqual({})

    const resultUndefined = countBy(undefined as any, item => (item as any).name)
    expect(resultUndefined).toEqual({})
  })

  it('should handle different key types', () => {
    const input = [{ id: 1 }, { id: 2 }, { id: 1 }]
    const result = countBy(input, item => item.id)
    expect(result).toEqual({ 1: 2, 2: 1 })
  })

  it('should handle mixed key types', () => {
    const input = [{ key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 1 }]
    const result = countBy(input, item => item.key)
    expect(result).toEqual({ a: 2, b: 1, 1: 1 })
  })
})
