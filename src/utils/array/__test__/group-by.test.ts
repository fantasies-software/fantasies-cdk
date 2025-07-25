import { describe, expect, it } from 'vitest'
import { groupBy } from '../group-by'

describe('groupBy', () => {
  it('should group items by a specified key', () => {
    const input = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Alice' },
    ]
    const result = groupBy(input, item => item.name)
    expect(result).toEqual({
      Alice: [{ id: 1, name: 'Alice' }, { id: 3, name: 'Alice' }],
      Bob: [{ id: 2, name: 'Bob' }],
    })
  })

  it('should return an empty object for an empty array', () => {
    const input: any[] = []
    const result = groupBy(input, item => item.name)
    expect(result).toEqual({})
  })

  it('should return an empty object for a non-array input', () => {
    const input: any = null
    const result = groupBy(input, item => (item as any).name)
    expect(result).toEqual({})

    const resultUndefined = groupBy(undefined as any, item => (item as any).name)
    expect(resultUndefined).toEqual({})
  })

  it('should handle different key types', () => {
    const input = [{ id: 1 }, { id: 2 }, { id: 1 }]
    const result = groupBy(input, item => item.id)
    expect(result).toEqual({ 1: [{ id: 1 }, { id: 1 }], 2: [{ id: 2 }] })
  })

  it('should skip items when key function returns undefined', () => {
    const input = [{ id: 1, name: 'Alice' }, { id: 2, name: undefined }]
    const result = groupBy(input, item => item.name)
    expect(result).toEqual({ Alice: [{ id: 1, name: 'Alice' }] })
  })
})
