import { describe, expect, it } from 'vitest'
import { isPromise } from '../../type/typed'

describe('isPromise', () => {
  it('returns true for Promise', () => {
    expect(isPromise(Promise.resolve(1))).toBe(true)
  })
  it('returns true for thenable', () => {
    expect(isPromise({ then: () => {}, catch: () => {} })).toBe(true)
  })
  it('returns false for non-promise', () => {
    expect(isPromise(123)).toBe(false)
    expect(isPromise(null)).toBe(false)
    expect(isPromise({})).toBe(false)
  })
})
