import { describe, expect, it, vi } from 'vitest'
import { computed, shallowRef, watch } from 'vue'
import { twoTicks } from '../../.test/two-ticks'
import { computedImmediate } from './index'

describe('computedImmediate', () => {
  it('should be defined', () => {
    expect(computedImmediate).toBeDefined()
  })

  it('should work', async () => {
    const foo = shallowRef(0)

    const plusOneComputed = computed(() => {
      return foo.value + 1
    })

    const plusOneImmediate = computedImmediate(() => {
      return foo.value + 1
    })

    const plusOneComputedSpy = vi.fn()
    const plusOneImmediateRefSpy = vi.fn()

    watch(() => plusOneComputed.value, plusOneComputedSpy)
    watch(() => plusOneImmediate.value, plusOneImmediateRefSpy)

    expect(plusOneComputed.value).toBe(1)
    expect(plusOneImmediate.value).toBe(1)
    expect(plusOneComputedSpy).toHaveBeenCalledTimes(0)
    expect(plusOneImmediateRefSpy).toHaveBeenCalledTimes(0)

    foo.value++
    await twoTicks()

    expect(plusOneComputed.value).toBe(2)
    expect(plusOneImmediate.value).toBe(2)
    expect(plusOneComputedSpy).toHaveBeenCalledTimes(1)
    expect(plusOneImmediateRefSpy).toHaveBeenCalledTimes(1)

    foo.value--
    await twoTicks()

    expect(plusOneComputed.value).toBe(1)
    expect(plusOneImmediate.value).toBe(1)
    expect(plusOneComputedSpy).toHaveBeenCalledTimes(2)
    expect(plusOneImmediateRefSpy).toHaveBeenCalledTimes(2)
  })

  it('should not trigger collect change if result is not changed', async () => {
    const foo = shallowRef(1)

    const isEvenComputed = computed(() => foo.value % 2 === 0)
    const isEvenImmediate = computedImmediate(() => foo.value % 2 === 0)

    const isEvenComputedSpy = vi.fn()
    const isEvenImmediateSpy = vi.fn()
    const isEvenComputedCollectSpy = vi.fn()
    const isEvenImmediateCollectSpy = vi.fn()

    watch(() => {
      isEvenComputedCollectSpy()
      return isEvenComputed.value
    }, isEvenComputedSpy)
    watch(() => {
      isEvenImmediateCollectSpy()
      return isEvenImmediate.value
    }, isEvenImmediateSpy)

    expect(isEvenComputed.value).toBe(false)
    expect(isEvenImmediate.value).toBe(false)
    expect(isEvenComputedSpy).toHaveBeenCalledTimes(0)
    expect(isEvenImmediateSpy).toHaveBeenCalledTimes(0)
    expect(isEvenComputedCollectSpy).toHaveBeenCalledTimes(1)
    expect(isEvenImmediateCollectSpy).toHaveBeenCalledTimes(1)

    foo.value++
    await twoTicks()

    expect(isEvenComputed.value).toBe(true)
    expect(isEvenImmediate.value).toBe(true)
    expect(isEvenComputedSpy).toHaveBeenCalledTimes(1)
    expect(isEvenImmediateSpy).toHaveBeenCalledTimes(1)
    expect(isEvenComputedCollectSpy).toHaveBeenCalledTimes(2)
    expect(isEvenImmediateCollectSpy).toHaveBeenCalledTimes(2)

    foo.value += 2
    await twoTicks()

    expect(isEvenComputed.value).toBe(true)
    expect(isEvenImmediate.value).toBe(true)
    expect(isEvenComputedSpy).toHaveBeenCalledTimes(1)
    expect(isEvenImmediateSpy).toHaveBeenCalledTimes(1)

    expect(isEvenComputedCollectSpy).toHaveBeenCalledTimes(2)
    expect(isEvenImmediateCollectSpy).toHaveBeenCalledTimes(2)
  })
})
