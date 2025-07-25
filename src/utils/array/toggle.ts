/**
 * If the item matching the condition already exists
 * in the list it will be removed. If it does not it
 * will be added.
 */
export function toggle<T>(
  list: readonly T[],
  item: T,
  toKey?: null | ((item: T, idx: number) => number | string | symbol),
  options?: {
    strategy?: 'prepend' | 'append'
  },
) {
  if (!list && !item)
    return []
  if (!list)
    return [item]
  if (!item)
    return [...list]
  let matcher
  if (toKey) {
    matcher = (x: T, idx: number) => toKey(x, idx) === toKey(item, idx)
  }
  else {
    matcher = (x: T) => x === item
  }
  const existing = list.find(matcher)
  if (existing)
    return list.filter((x, idx) => !matcher(x, idx))
  let strategy
  if (options && options.strategy !== undefined && options.strategy !== null) {
    strategy = options.strategy
  }
  else {
    strategy = 'append'
  }
  if (strategy === 'append') {
    return [...list, item]
  }
  else {
    return [item, ...list]
  }
}
