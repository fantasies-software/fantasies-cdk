/**
 *  sum function to calculate the sum of an array of numbers or objects.
 *  eg:  sum([1, 2, 3]) // returns 6
 *  eg:  sum([{ value: 1 }, { value: 2 }, { value: 3 }], item => item.value) // returns 6
 */
export function sum<T extends number>(array: readonly T[]): number
export function sum<T extends object>(array: readonly T[], selector: (item: T) => number): number
export function sum<T>(array: readonly T[], selector?: (item: T) => number): number {
  if (!array || array.length === 0) {
    return 0
  }
  if (selector) {
    return array.reduce((acc, item) => acc + selector(item), 0)
  }
  return array.reduce((acc, item) => acc + (item as unknown as number), 0)
}
