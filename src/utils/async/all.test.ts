import { describe, expect, it } from 'vitest'
import { AggregateError } from './aggregate-error'
import { all } from './all'

describe('all', () => {
  it('resolves all promises in array', async () => {
    const result = await all([
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
    ])
    expect(result).toEqual([1, 2, 3])
  })

  it('resolves all promises in object', async () => {
    const result = await all({
      a: Promise.resolve(1),
      b: Promise.resolve(2),
    })
    expect(result).toEqual({ a: 1, b: 2 })
  })

  it('throws AggregateError if any promise rejects', async () => {
    await expect(
      all([
        Promise.resolve(1),
        Promise.reject(new Error('fail')),
      ]),
    ).rejects.toThrow(AggregateError)
  })
})
