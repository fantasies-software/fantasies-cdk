import { describe, expect, it } from 'vitest'
import { tryit } from './tryit'

describe('tryit', () => {
  it('returns sync result', () => {
    const fn = tryit((x: number) => x + 1)
    const [err, result] = fn(1)
    expect(err).toBeUndefined()
    expect(result).toBe(2)
  })

  it('catches async errors', async () => {
    const fn = tryit(async () => {
      throw new Error('fail')
    })
    const [err, result] = await fn()
    expect(err).toBeInstanceOf(Error)
    expect(result).toBeUndefined()
  })

  it('returns async result', async () => {
    const fn = tryit(async (x: number) => x + 1)
    const [err, result] = await fn(1)
    expect(err).toBeUndefined()
    expect(result).toBe(2)
  })
})
