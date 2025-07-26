import { describe, expect, it } from 'vitest'
import { AggregateError } from '../aggregate-error'

describe('aggregateError', () => {
  it('sets name and message', () => {
    const err = new AggregateError([new Error('a'), new Error('b')])
    expect(err.name).toMatch(/AggregateError/)
    expect(err.message).toMatch(/2 errors/)
    expect(err.errors.length).toBe(2)
  })

  it('handles empty error array', () => {
    const err = new AggregateError([])
    expect(err.name).toMatch(/AggregateError/)
    expect(err.message).toMatch(/0 errors/)
    expect(err.errors.length).toBe(0)
  })

  it('handles error with no name/stack', () => {
    const errObj = { message: 'x' } as any
    const err = new AggregateError([errObj])
    expect(err.name).toMatch(/AggregateError/)
    expect(err.message).toMatch(/1 errors/)
    expect(err.errors[0]).toBe(errObj)
  })

  it('handles single error', () => {
    const err = new AggregateError([new Error('a')])
    expect(err.name).toMatch(/AggregateError/)
    expect(err.message).toMatch(/1 errors/)
    expect(err.errors.length).toBe(1)
  })
})
