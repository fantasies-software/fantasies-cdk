import { describe, expect, it } from 'vitest'
import { toDic } from './to-dic'

describe('toDic', () => {
  it('should convert array to dictionary', () => {
    expect(toDic([{ id: 1 }, { id: 2 }], x => x.id)).toEqual({ 1: { id: 1 }, 2: { id: 2 } })
  })
  it('should handle empty array', () => {
    expect(toDic([], x => x)).toEqual({})
  })
})
