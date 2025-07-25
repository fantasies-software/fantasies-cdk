import { describe, expect, it } from 'vitest'
import { sleep } from '../sleep'

describe('sleep', () => {
  it('waits at least the specified time', async () => {
    const start = Date.now()
    await sleep(50)
    const elapsed = Date.now() - start
    expect(elapsed).toBeGreaterThanOrEqual(45)
  })
})
