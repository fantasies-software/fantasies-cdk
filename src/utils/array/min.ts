import { boil } from './boil'

/**
 *  Finds the minimum value in an array of numbers or objects.
 *  eg: min([1, 2, 3]) // returns 1
 *  eg: min([{ value: 1 }, { value: 2 }, { value: 3 }], item => item.value) => returns { value: 1 }
 */
export function min(array: readonly [number, ...number[]]): number
export function min(array: readonly number[]): number | null
export function min<T>(array: readonly T[], getter: (item: T) => number): T | null
export function min<T>(array: readonly T[], getter?: (item: T) => number): T | null {
  if (!getter) {
    getter = item => item as unknown as number
  }
  return boil(array, (pre, next) => {
    if (getter(pre) < getter(next)) {
      return pre
    }
    else {
      return next
    }
  })
}
