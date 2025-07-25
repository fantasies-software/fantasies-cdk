import { describe, expect, it, vi } from 'vitest'
import { throttle } from './throttle'

describe('throttle', () => {
  it('should throttle calls', async () => {
    const fn = vi.fn()
    const throttled = throttle({ interval: 10 }, fn)
    throttled(1)
    throttled(2)
    expect(fn).toHaveBeenCalledTimes(1)
    await new Promise(r => setTimeout(r, 15))
    throttled(3)
    expect(fn).toHaveBeenCalledTimes(2)
    expect(fn).toHaveBeenCalledWith(1)
    expect(fn).toHaveBeenCalledWith(3)
  })

  it('should report throttled state', () => {
    const fn = vi.fn()
    const throttled = throttle({ interval: 10 }, fn)
    throttled(1)
    expect(throttled.isThrottled()).toBe(true)
  })
})
