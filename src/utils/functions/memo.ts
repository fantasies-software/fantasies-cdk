import { memoize } from './memoize'

export function memo<TArgs extends any[], TResult>(func: (...args: TArgs) => TResult, options: {
  key?: (...args: TArgs) => string
  ttl?: number
} = {}) {
  return memoize({}, func, options.key ?? null, options.ttl ?? null) as (
    ...args: TArgs
  ) => TResult
}
