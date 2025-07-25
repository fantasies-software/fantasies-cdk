import { describe, expect, it } from 'vitest'
import {
  alphabetical,
  boil,
  countBy,
  getFirst,
  getLast,
  groupBy,
  replaceAllArrayByItem,
  replaceArrayByItem,
  selectMap,
  sort,
  sum,
  toDic,
  zipToArray,
  zipToObject,
} from './array'

describe('getFirst', () => {
  it('returns first element', () => {
    expect(getFirst([1, 2, 3])).toBe(1)
  })
  it('returns default value for empty array', () => {
    expect(getFirst([], 99)).toBe(99)
  })
  it('returns null for empty array without default', () => {
    expect(getFirst([])).toBeNull()
  })
})

describe('getLast', () => {
  it('returns last element', () => {
    expect(getLast([1, 2, 3])).toBe(3)
  })
  it('returns default value for empty array', () => {
    expect(getLast([], 88)).toBe(88)
  })
  it('returns null for empty array without default', () => {
    expect(getLast([])).toBeNull()
  })
})

describe('boil.ts', () => {
  describe('boil', () => {
    it('should return the greatest number in an array', () => {
      const numbers = [1, 5, 3, 9, 2]
      const result = boil(numbers, (a, b) => a > b ? a : b)
      expect(result).toBe(9)
    })
  })

  describe('boil with empty array', () => {
    it('should return null for an empty array', () => {
      const result = boil([], (a, b) => a > b ? a : b)
      expect(result).toBeNull()
    })
  })

  describe('boil with null input', () => {
    it('should return null for null input', () => {
      const result = boil(1 as any, (_a, _b) => 1)
      expect(result).toBeNull()
    })
  })

  describe('boil with no length input', () => {
    it('should return null for input with no length', () => {
      const result = boil({} as any, (_a, _b) => 1)
      expect(result).toBeNull()
    })
  })
})

describe('toDic', () => {
  const array = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]

  it('should be 1:"Alice", 2: "Bob"', () => {
    expect(toDic(array, item => item.id, item => item.name)).toEqual({ 1: 'Alice', 2: 'Bob' })
  })

  it('should be 1:{ id: 1, name: "Alice" }, 2: { id: 2, name: "Bob" }', () => {
    expect(toDic(array, item => item.id)).toEqual({ 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' } })
  })

  it('should return empty object for non-array input', () => {
    expect(toDic(null as any, (item: any) => item.id)).toEqual({})
  })

  it('should return empty object if getKey or getValue is not a function', () => {
    expect(toDic(array, null as any)).toEqual({})
    expect(toDic(array, item => item.id, null as any)).toEqual({})
  })
})

describe('selectMap', () => {
  it('returns empty array if input is not array', () => {
    expect(selectMap(null as any, () => true, x => x)).toEqual([])
  })

  it('returns empty array if condition is not a function', () => {
    expect(selectMap([1, 2, 3], null as any, x => x)).toEqual([])
  })

  it('returns mapped array for matching items', () => {
    const arr = [1, 2, 3, 4]
    const result = selectMap(arr, item => item > 2, item => item * 2)
    expect(result).toEqual([6, 8])
  })

  it('returns empty array if no items match', () => {
    const arr = [1, 2]
    const result = selectMap(arr, item => item > 10, item => item * 2)
    expect(result).toEqual([])
  })

  it('works with index in condition and mapper', () => {
    const arr = [10, 20, 30]
    const result = selectMap(arr, (_item, idx) => idx === 1, (item, _idx) => item * 2)
    expect(result).toEqual([40])
  })
})

describe('sum', () => {
  it('should return 6 for sum([1, 2, 3])', () => {
    const result = sum([1, 2, 3])
    expect(result).toBe(6)
  })

  it('should return 6 for sum([{ value: 1 }, { value: 2 }, { value: 3 }], item => item.value)', () => {
    const result = sum([{ value: 1 }, { value: 2 }, { value: 3 }], item => item.value)
    expect(result).toBe(6)
  })

  it('should return 0 for empty array', () => {
    const result = sum([])
    expect(result).toBe(0)
  })

  it('should return 0 for undefined input', () => {
    const result = sum(undefined as unknown as number[])
    expect(result).toBe(0)
  })
})

describe('countBy', () => {
  it('counts by key', () => {
    const arr = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Alice' }]
    expect(countBy(arr, x => x.name)).toEqual({ Alice: 2, Bob: 1 })
  })
  it('returns empty object for non-array', () => {
    expect(countBy(null as any, x => x as any)).toEqual({})
  })
  it('counts numbers', () => {
    expect(countBy([1, 2, 1, 3], x => x)).toEqual({ 1: 2, 2: 1, 3: 1 })
  })
})

describe('replaceAllArrayByItem', () => {
  it('replaces all matching items', () => {
    const arr: number[] = [1, 2, 3, 2, 4]
    const result = replaceAllArrayByItem(arr, 0, item => item === 2)
    expect(result).toEqual([1, 0, 3, 0, 4])
  })

  it('returns empty array if input is not array', () => {
    expect(replaceAllArrayByItem(null as any, 0, () => true)).toEqual([])
  })

  it('returns original array if item is falsy', () => {
    const arr = [1, 2, 3]
    expect(replaceAllArrayByItem(arr, undefined as any, () => true)).toEqual([1, 2, 3])
  })

  it('returns original array if no match', () => {
    const arr = [1, 2, 3]
    const result = replaceAllArrayByItem(arr, 0, item => item === 5)
    expect(result).toEqual([1, 2, 3])
  })
})

describe('replaceArrayByItem', () => {
  it('replaces first matching item', () => {
    const arr = [1, 2, 3, 2, 4]
    const result = replaceArrayByItem(arr, 0, item => item === 2)
    expect(result).toEqual([1, 0, 3, 2, 4])
  })

  it('returns empty array if input is not array', () => {
    expect(replaceArrayByItem(null as any, 0, () => true)).toEqual([])
  })

  it('returns original array if item is falsy', () => {
    const arr = [1, 2, 3]
    expect(replaceArrayByItem(arr, undefined as any, () => true)).toEqual([1, 2, 3])
  })

  it('returns original array if no match', () => {
    const arr = [1, 2, 3]
    const result = replaceArrayByItem(arr, 0, item => item === 5)
    expect(result).toEqual([1, 2, 3])
  })
})

describe('group-by.ts', () => {
  const data = [
    { id: 1, name: 'Alice', age: 30, sex: 'boy' },
    { id: 2, name: 'Bob', age: 25, sex: 'boy' },
    { id: 3, name: 'Charlie', age: 35, sex: 'girl' },
    { id: 4, name: 'David', age: 28 },
  ]
  describe('groupBy', () => {
    it(`should be equal ['boy','girl']`, () => {
      const result = groupBy(data, item => item.sex)
      expect(Object.keys(result)).toEqual(['boy', 'girl'])
    })
  })
})

describe('sort', () => {
  it('sorts numbers ascending', () => {
    expect(sort([3, 1, 2], x => x)).toEqual([1, 2, 3])
  })
  it('sorts numbers descending', () => {
    expect(sort([3, 1, 2], x => x, 'desc')).toEqual([3, 2, 1])
  })
  it('returns [] for non-array', () => {
    expect(sort(null as any, x => x as any)).toEqual([])
  })
})

describe('alphabetical', () => {
  const arr = [{ name: 'Bob' }, { name: 'alice' }, { name: 'Carol' }]
  it('sorts alphabetically ascending (case-insensitive)', () => {
    expect(alphabetical(arr, x => x.name)).toEqual([
      { name: 'alice' },
      { name: 'Bob' },
      { name: 'Carol' },
    ])
  })
  it('sorts alphabetically descending', () => {
    expect(alphabetical(arr, x => x.name, 'desc')).toEqual([
      { name: 'Carol' },
      { name: 'Bob' },
      { name: 'alice' },
    ])
  })
  it('returns [] for non-array', () => {
    expect(alphabetical(null as any, x => (x as any).name)).toEqual([])
  })
})

describe('zip.ts', () => {
  describe('zipToArray', () => {
    it('should zip two arrays of equal length', () => {
      const result = zipToArray(['a', 'b'], [1, 2])
      expect(result).toEqual([['a', 1], ['b', 2]])
    })

    it('should zip arrays of different lengths, filling with undefined', () => {
      const result = zipToArray(['a', 'b', 'c'], [1, 2])
      expect(result).toEqual([['a', 1], ['b', 2], ['c', undefined]])
    })

    it('should zip three arrays', () => {
      const result = zipToArray(['a', 'b'], [1, 2], [true, false])
      expect(result).toEqual([['a', 1, true], ['b', 2, false]])
    })

    it('should zip four arrays', () => {
      const result = zipToArray(['a', 'b'], [1, 2], [true, false], [null, undefined])
      expect(result).toEqual([
        ['a', 1, true, null],
        ['b', 2, false, undefined],
      ])
    })

    it('should zip five arrays', () => {
      const result = zipToArray(['a'], [1], [true], [null], ['x'])
      expect(result).toEqual([['a', 1, true, null, 'x']])
    })

    it('should zip six arrays', () => {
      const result = zipToArray(['a'], [1], [true], [null], ['x'], [42])
      expect(result).toEqual([['a', 1, true, null, 'x', 42]])
    })

    it('should zip seven arrays', () => {
      const result = zipToArray(['a'], [1], [true], [null], ['x'], [42], ['y'])
      expect(result).toEqual([['a', 1, true, null, 'x', 42, 'y']])
    })

    it('should zip eight arrays', () => {
      const result = zipToArray(['a'], [1], [true], [null], ['x'], [42], ['y'], [100])
      expect(result).toEqual([['a', 1, true, null, 'x', 42, 'y', 100]])
    })

    it('should zip nine arrays', () => {
      const result = zipToArray(['a'], [1], [true], [null], ['x'], [42], ['y'], [100], ['z'])
      expect(result).toEqual([['a', 1, true, null, 'x', 42, 'y', 100, 'z']])
    })

    it('should zip ten arrays', () => {
      const result = zipToArray(['a'], [1], [true], [null], ['x'], [42], ['y'], [100], ['z'], [999])
      expect(result).toEqual([['a', 1, true, null, 'x', 42, 'y', 100, 'z', 999]])
    })

    it('should handle empty arrays', () => {
      const result = zipToArray([], [])
      expect(result).toEqual([])
    })

    it('should handle one empty array and one non-empty array', () => {
      const result = zipToArray([], [1, 2, 3])
      expect(result).toEqual([[undefined, 1], [undefined, 2], [undefined, 3]])
    })

    it('should handle null/undefined values in arrays', () => {
      const result = zipToArray([null, undefined], [1, 2])
      expect(result).toEqual([[null, 1], [undefined, 2]])
    })

    it('should handle arrays with different types', () => {
      const result = zipToArray([1, 2], ['a', 'b'], [true, false])
      expect(result).toEqual([[1, 'a', true], [2, 'b', false]])
    })

    it('should handle arrays with complex objects', () => {
      const obj1 = { name: 'Alice' }
      const obj2 = { name: 'Bob' }
      const result = zipToArray([obj1], [obj2])
      expect(result).toEqual([[obj1, obj2]])
    })

    it('should handle single element arrays', () => {
      const result = zipToArray(['single'], [42])
      expect(result).toEqual([['single', 42]])
    })

    it('should handle very long arrays', () => {
      const arr1 = Array.from({ length: 1000 }).fill('a')
      const arr2 = Array.from({ length: 1000 }).fill(1)
      const result = zipToArray(arr1, arr2)
      expect(result).toHaveLength(1000)
      expect(result[0]).toEqual(['a', 1])
      expect(result[999]).toEqual(['a', 1])
    })
  })

  describe('zipToObject', () => {
    it('should zip keys and values arrays of equal length', () => {
      expect(zipToObject(['a', 'b'], [1, 2])).toEqual({ a: 1, b: 2 })
    })

    it('should zip keys and values arrays of different lengths', () => {
      expect(zipToObject(['a', 'b', 'c'], [1, 2])).toEqual({ a: 1, b: 2, c: undefined })
    })

    it('should zip keys with a single value', () => {
      expect(zipToObject(['a', 'b'], 42)).toEqual({ a: 42, b: 42 })
    })

    it('should zip keys with a value function', () => {
      expect(zipToObject(['x', 'y'], (key, idx) => `${key}-${idx}`)).toEqual({ x: 'x-0', y: 'y-1' })
    })

    it('should return empty object for empty keys', () => {
      expect(zipToObject([], [1, 2])).toEqual({})
      expect(zipToObject([], 42)).toEqual({})
      expect(zipToObject([], () => 1)).toEqual({})
    })

    it('should handle undefined keys', () => {
      expect(zipToObject(undefined as any, [1, 2])).toEqual({})
    })

    it('should zip keys with undefined values', () => {
      expect(zipToObject(['a', 'b'], undefined)).toEqual({ a: undefined, b: undefined })
    })

    it('should zip keys with null values', () => {
      expect(zipToObject(['a', 'b'], null)).toEqual({ a: null, b: null })
    })

    it('should zip keys with values array containing undefined/null', () => {
      expect(zipToObject(['a', 'b'], [undefined, null])).toEqual({ a: undefined, b: null })
    })

    it('should zip keys with complex values', () => {
      const obj1 = { foo: 1 }
      const obj2 = { bar: 2 }
      expect(zipToObject(['a', 'b'], [obj1, obj2])).toEqual({ a: obj1, b: obj2 })
    })

    it('should zip keys with symbol and number keys', () => {
      const sym = Symbol('s')
      expect(zipToObject([sym, 1], ['x', 'y'])).toEqual({ [sym]: 'x', 1: 'y' })
    })

    it('should zip keys with value function using index', () => {
      expect(zipToObject(['a', 'b', 'c'], (_key, idx) => idx)).toEqual({ a: 0, b: 1, c: 2 })
    })

    it('should zip keys with values array shorter than keys', () => {
      expect(zipToObject(['a', 'b', 'c'], [1])).toEqual({ a: 1, b: undefined, c: undefined })
    })

    it('should zip keys with values array longer than keys', () => {
      expect(zipToObject(['a'], [1, 2, 3])).toEqual({ a: 1 })
    })
  })
})
