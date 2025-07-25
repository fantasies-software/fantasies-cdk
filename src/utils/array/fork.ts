import { isArray } from '../type/typed'

/**
 *  Splits an array into two arrays based on a condition.
 *  eg: `fork([1, 2, 3, 4], n => n % 2 === 0)` will return `[[2, 4], [1, 3]]`
 */
export function fork<T>(array: T[], condition: (item: T) => boolean): [T[], T[]] {
  if (!isArray(array) || !array) {
    return [[], []]
  }
  return array.reduce((acc, item) => {
    const [a, b] = acc
    if (condition(item)) {
      return [[...a, item], b]
    }
    else {
      return [a, [...b, item]]
    }
  }, [[], []] as [T[], T[]])
}
