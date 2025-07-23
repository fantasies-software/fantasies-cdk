import { describe, expect, it } from 'vitest'
import { groupBy } from './group-by'

const data = [
  { id: 1, name: 'Alice', age: 30, sex: 'boy' },
  { id: 2, name: 'Bob', age: 25, sex: 'boy' },
  { id: 3, name: 'Charlie', age: 35, sex: 'girl' },
  { id: 4, name: 'David', age: 28 },
]

describe('group-by.ts', () => {
  describe('groupBy', () => {
    it(`should be equal ['boy','girl']`, () => {
      const result = groupBy(data, item => item.sex)
      expect(Object.keys(result)).toEqual(['boy', 'girl'])
    })
  })
})
