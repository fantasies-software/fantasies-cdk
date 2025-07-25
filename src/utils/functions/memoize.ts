import type { Cache } from './type'

export function memoize<TArgs extends any[], TResult>(cache: Cache<TResult>, func: (...args: TArgs) => TResult, keyFunc: ((...args: TArgs) => string) | null, ttl: number | null) {
  return function callWithMemo(...args: any): TResult {
    const key = keyFunc ? keyFunc(...args) : JSON.stringify({ args })
    const existing = cache[key]
    if (existing !== undefined) {
      if (!existing.exp)
        return existing.value
      if (existing.exp > new Date().getTime()) {
        return existing.value
      }
    }
    const result = func(...args)
    cache[key] = {
      exp: ttl ? new Date().getTime() + ttl : null,
      value: result,
    }
    return result
  }
}
