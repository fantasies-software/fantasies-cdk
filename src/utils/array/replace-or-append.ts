
/**
 *  Replaces an item in a list if it matches a condition, otherwise appends the new item.
 *  If the list is empty, it appends the new item.
 *  If the new item is null or undefined, it returns the original list.
 *  If the list is null or undefined, it returns a new list with the new item
 *  eg: replaceOrAppend([1, 2, 3], 2, (item) => item === 2) // returns [1, 2, 3]
 *  eg: replaceOrAppend([1, 2, 3], 4, (item) => item === 2) // returns [1, 2, 3, 4]
 *  eg: replaceOrAppend([], 4, (item) => item === 2 ) // returns [4]
 */
export function replaceOrAppend<T>(
  list: readonly T[],
  newItem: T,
  match: (a: T, idx: number) => boolean
) {
  if (!list && !newItem) return []
  if (!newItem) return [...list]
  if (!list) return [newItem]
  for (let idx = 0; idx < list.length; idx++) {
    const item = list[idx]
    if (match(item, idx)) {
      return [
        ...list.slice(0, idx),
        newItem,
        ...list.slice(idx + 1, list.length)
      ]
    }
  }
  return [...list, newItem]
}

