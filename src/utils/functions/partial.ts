import type { RemoveItemsInFront } from './type'

export function partial<T extends any[], TA extends Partial<T>, R>(fn: (...args: T) => R, ...args: TA) {
  return (...rest: RemoveItemsInFront<T, TA>) =>
    fn(...([...args, ...rest] as T))
}
