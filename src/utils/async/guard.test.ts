import { describe, expect, it } from 'vitest'
import { guard } from './guard'

describe('guard', () => {
  it('returns result if no error', () => {
    const fn = () => 42
    expect(guard(fn)).toBe(42)
  })

  it('returns undefined if error thrown', () => {
    const fn = () => {
      throw new Error('fail')
    }
    expect(guard(fn)).toBeUndefined()
  })

  it('returns undefined for async error', async () => {
    const fn = async () => {
      throw new Error('fail')
    }
    expect(await guard(fn)).toBeUndefined()
  })

  it('shouldGuard can rethrow', () => {
    const fn = () => {
      throw new Error('fail')
    }
    expect(() => guard(fn, () => false)).toThrow()
  })
})
