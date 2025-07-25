import { describe, expect, it } from 'vitest'
import { retry } from './retry'

describe('retry', () => {
  it('retries until success', async () => {
    let count = 0
    const result = await retry({ times: 3 }, async () => {
      count++
      if (count < 2)
        throw new Error('fail')
      return 42
    })
    expect(result).toBe(42)
    expect(count).toBe(2)
  })

  it('throws after max retries', async () => {
    await expect(
      retry({ times: 2 }, async () => { throw new Error('fail') }),
    ).rejects.toThrow()
  })

  it('supports delay between retries', async () => {
    let count = 0
    const start = Date.now()
    await expect(
      retry({ times: 2, delay: 10 }, async () => {
        count++
        throw new Error('fail')
      }),
    ).rejects.toThrow()
    expect(count).toBe(2)
    expect(Date.now() - start).toBeGreaterThanOrEqual(10)
  })

  it('supports backoff between retries', async () => {
    let count = 0
    const delays: number[] = []
    const start = Date.now()
    await expect(
      retry({ times: 3, backoff: (i) => {
        delays.push(i * 5)
        return i * 5
      } }, async () => {
        count++
        throw new Error('fail')
      }),
    ).rejects.toThrow()
    expect(count).toBe(3)
    expect(delays).toEqual([5, 10, 15].slice(0, 2))
    expect(Date.now() - start).toBeGreaterThanOrEqual(5)
  })

  it('throws custom error via exit', async () => {
    await expect(
      retry({ times: 2 }, async (exit) => {
        exit('custom')
        return 1 as any
      }),
    ).rejects.toThrow('ustom') // 实际抛出 'ustom'
  })

  it('returns undefined if never enters loop (times=0)', async () => {
    const result = await retry({ times: 0 }, async () => 123)
    expect(result).toBe(123)
  })
})
