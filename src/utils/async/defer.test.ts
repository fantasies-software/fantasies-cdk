import { describe, expect, it } from 'vitest'
import { defer } from './defer'

describe('defer', () => {
  it('runs deferred callbacks after main', async () => {
    let called = false
    const result = await defer(async (register) => {
      register(() => {
        called = true
      })
      return 42
    })
    expect(result).toBe(42)
    expect(called).toBe(true)
  })

  it('throws if deferred callback throws and rethrow is set', async () => {
    await expect(
      defer(async (register) => {
        register(() => {
          throw new Error('fail')
        }, { rethrow: true })
        return 1
      }),
    ).rejects.toThrow()
  })
})
