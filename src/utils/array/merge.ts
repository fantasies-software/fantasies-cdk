

/**
 *  Merges two arrays based on a matcher function.
 *  If an item in the root array has a matching item in the others array based on the matcher,
 *  it will replace the item in the root array with the matched item from the others array.
 *  If no match is found, the item from the root array is retained.
 *  Returns a new array with the merged results.
 *  eg: `merge([1, 2, 3], [2, 3, 4], n => n)` will return `[2, 3, 1]`
 *  eg: `merge([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }], item => item.id)` will return `[{ id: 2 }, { id: 1 }]`
 *  eg: `merge([{id:1,name:'a'},{id:2,name:'b'}],[{id:2,name:'c'},{id:3,name:'d'}],item=>item.id)` will return `[{id:2,name:'c'},{id:1,name:'a'}]`
 */
export function merge<T>(root: readonly T[], others: readonly T[], matcher: (item: T) => any) {
  if (!others && !root) return []
  if (!others) return root
  if (!root) return []
  if (!matcher) return root
  return root.reduce((acc, r) => {
    const matched = others.find(o => matcher(r) === matcher(o))
    if (matched) acc.push(matched)
    else acc.push(r)
    return acc
  }, [] as T[])
}
