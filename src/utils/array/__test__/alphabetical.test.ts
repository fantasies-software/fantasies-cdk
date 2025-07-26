import { describe, expect, it } from 'vitest'
import { alphabetical } from '../alphabetical'

describe('alphabetical', () => {
  it('should sort an array of objects alphabetically in ascending order', () => {
    const input = [{ name: 'Bob' }, { name: 'Alice' }]
    const result = alphabetical(input, item => item.name, 'asc')
    expect(result).toEqual([{ name: 'Alice' }, { name: 'Bob' }])
  })

  it('should sort an array of objects alphabetically in descending order', () => {
    const input = [{ name: 'Bob' }, { name: 'Alice' }]
    const result = alphabetical(input, item => item.name, 'desc')
    expect(result).toEqual([{ name: 'Bob' }, { name: 'Alice' }])
  })

  it('should handle an empty array', () => {
    const input: any[] = []
    const result = alphabetical(input, item => item.name)
    expect(result).toEqual([])
  })

  it('should handle undefined or null input', () => {
    const result1 = alphabetical(undefined as any, item => (item as any).name)
    expect(result1).toEqual([])

    const result2 = alphabetical(null as any, item => (item as any).name)
    expect(result2).toEqual([])
  })

  it('should handle case insensitivity', () => {
    const input = [{ name: 'bob' }, { name: 'Alice' }]
    const result = alphabetical(input, item => item.name, 'asc')
    expect(result).toEqual([{ name: 'Alice' }, { name: 'bob' }])
  })
})
