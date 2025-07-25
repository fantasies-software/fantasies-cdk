import { boil } from './boil'

/**
 *  Finds the maximum value in an array of numbers or objects.
 *  eg: max([1, 2, 3]) // returns 3
 *  eg: max([{ value: 1 }, { value: 2 }, { value: 3 }], item => item.value) => returns { value: 3 }
 */
export function max(array: readonly [number, ...number[]]): number
export function max(array: readonly number[]): number | null
export function max<T>(array: readonly T[], getter: (item: T) => number): T | null
export function max<T>(array: readonly T[], getter?: (item: T) => number): T | null {
  let getValue: (item: T) => number
  if (getter) {
    getValue = getter
  }
  else {
    getValue = item => item as unknown as number
  }
  return boil(array, (pre, next) => {
    if (getValue(pre) > getValue(next)) {
      return pre
    }
    return next
  })
}
