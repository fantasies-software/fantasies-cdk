import { describe, expect, it } from 'vitest'
import { boil } from './boil'

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
