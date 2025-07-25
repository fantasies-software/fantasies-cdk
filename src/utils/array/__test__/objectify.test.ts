import { describe, expect, it } from 'vitest'
import { objectify } from '../objectify'

describe('objectify', () => {
  it('transforms array to object with key and value functions', () => {
    const arr = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
    expect(objectify(arr, item => item.id, item => item.name)).toEqual({ 1: 'Alice', 2: 'Bob' })
  })
  it('uses item as value if no value function', () => {
    const arr = [{ id: 'a' }, { id: 'b' }]
    expect(objectify(arr, item => item.id)).toEqual({ a: { id: 'a' }, b: { id: 'b' } })
  })
  it('returns empty object for empty array', () => {
    expect(objectify([], x => x)).toEqual({})
  })
  it('handles duplicate keys, last wins', () => {
    const arr = [{ id: 1, v: 'a' }, { id: 1, v: 'b' }]
    expect(objectify(arr, item => item.id, item => item.v)).toEqual({ 1: 'b' })
  })
})
