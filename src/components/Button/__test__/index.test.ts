import { computed } from '@vue/runtime-core'
import { describe, expect, it, vi } from 'vitest'

describe('computed', () => {
  it('is lazy', () => {
    const func = vi.fn(() => 'data')
    const data = computed(func)
    expect(func).not.toBeCalled()
    expect(data.value).toBe('data')
    expect(func).toBeCalledTimes(1)
  })
})
