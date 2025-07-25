import { describe, expect, it, vi } from 'vitest'
import { debounce } from './debounce'

describe('debounce', () => {
  it('should debounce calls', async () => {
    const fn = vi.fn()
    const debounced = debounce({ delay: 10 }, fn)
    debounced(1)
    debounced(2)
    expect(fn).not.toHaveBeenCalled()
    await new Promise(r => setTimeout(r, 15))
    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledWith(2)
  })

  it('should cancel', () => {
    const fn = vi.fn()
    const debounced = debounce({ delay: 10 }, fn)
    debounced(1)
    debounced.cancel()
    expect(debounced.isPending()).toBe(false)
  })

  it('should flush', () => {
    const fn = vi.fn()
    const debounced = debounce({ delay: 10 }, fn)
    debounced.flush(3)
    expect(fn).toHaveBeenCalledWith(3)
  })
})
