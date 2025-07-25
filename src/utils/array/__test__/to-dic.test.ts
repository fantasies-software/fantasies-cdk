import { describe, expect, it } from 'vitest'
import { toDic } from '../to-dic'

describe('toDic', () => {
  it('should convert an array of objects to a dictionary with specified keys and values', () => {
    const result = toDic(
      [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }],
      item => item.id,
      item => item.name,
    )
    expect(result).toEqual({ 1: 'Alice', 2: 'Bob' })
  })

  it('should handle an empty array', () => {
    const result = toDic([], (item: any) => item.id, item => item.name)
    expect(result).toEqual({})
  })

  it('should use the default value function if not provided', () => {
    const result = toDic([{ id: 1, name: 'Alice' }], item => item.id)
    expect(result).toEqual({ 1: { id: 1, name: 'Alice' } })
  })

  it('should handle arrays with non-string keys', () => {
    const result = toDic(
      [{ id: 1, value: 10 }, { id: 2, value: 20 }],
      item => item.id,
      item => item.value,
    )
    expect(result).toEqual({ 1: 10, 2: 20 })
  })

  it('should handle arrays with mixed types', () => {
    const result = toDic(
      [{ id: 'a', value: true }, { id: 'b', value: false }],
      item => item.id,
      item => item.value,
    )
    expect(result).toEqual({ a: true, b: false })
  })

  it('should return empty object for invalid array input', () => {
    expect(toDic(null as any, item => (item as any).id)).toEqual({})
    expect(toDic(undefined as any, item => (item as any).id)).toEqual({})
  })

  it('should return empty object for invalid key/value functions', () => {
    expect(toDic([{ id: 1 }], null as any, item => item)).toEqual({})
    expect(toDic([{ id: 1 }], item => (item as any).id, null as any)).toEqual({})
  })
})
