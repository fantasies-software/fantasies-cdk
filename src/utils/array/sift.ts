export type Falsy = null | undefined | false | '' | 0 | 0n
/**
 * Given a list returns a new list with
 * only truthy values
 */
export function sift<T>(list: readonly (T | Falsy)[]): T[] {
  if (!list) {
    return []
  }
  const filtered = list.filter(x => !!x)
  return filtered as T[]
}
