import { describe, expect, it } from 'vitest'
import { AggregateError } from '../aggregate-error'
import { parallel } from '../parallel'

describe('parallel', () => {
  it('runs async tasks in parallel with limit', async () => {
    const arr = [1, 2, 3, 4]
    const result = await parallel(2, arr, async x => x * 2)
    expect(result).toEqual([2, 4, 6, 8])
  })

  it('throws AggregateError if any task fails', async () => {
    await expect(
      parallel(2, [1, 2, 3], async (x) => {
        if (x === 2)
          throw new Error('fail')
        return x
      }),
    ).rejects.toThrow(AggregateError)
  })
})
