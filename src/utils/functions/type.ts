export type RemoveItemsInFront<TItems extends any[], TItemsToRemove extends any[]> = TItems extends [...TItemsToRemove, ...infer TRest] ? TRest : TItems
export type Cache<T> = Record<string, { exp: number | null, value: T }>

export interface DebounceFunction<TArgs extends any[]> {
  (...args: TArgs): void
  cancel: () => void
  isPending: () => boolean
  flush: (...args: TArgs) => void
}

export interface ThrottledFunction<TArgs extends any[]> {
  (...args: TArgs): void
  isThrottled: () => boolean
}
