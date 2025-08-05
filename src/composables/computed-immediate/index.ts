import type { ShallowRef, WatchOptionsBase } from 'vue'
import { readonly, shallowRef, watchEffect } from 'vue'

export function computedImmediate<T = any>(
  fn: () => T,
  options?: WatchOptionsBase,
): Readonly<ShallowRef<T>> {
  const result = shallowRef()
  watchEffect(
    () => {
      result.value = fn()
    },
    { ...options, flush: options?.flush ?? 'sync' },
  )
  return readonly(result)
}
