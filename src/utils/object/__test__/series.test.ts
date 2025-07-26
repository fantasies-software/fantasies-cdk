import { describe, expect, it } from 'vitest'
import { series } from '../series'

describe('series', () => {
  it('min returns the earlier value', () => {
    const s = series(['a', 'b', 'c'])
    expect(s.min('a', 'b')).toBe('a')
    expect(s.min('c', 'b')).toBe('b')
  })
  it('max returns the later value', () => {
    const s = series(['a', 'b', 'c'])
    expect(s.max('a', 'b')).toBe('b')
    expect(s.max('c', 'b')).toBe('c')
  })
  it('first returns the first item', () => {
    const s = series([1, 2, 3])
    expect(s.first()).toBe(1)
  })
  it('last returns the last item', () => {
    const s = series([1, 2, 3])
    expect(s.last()).toBe(3)
  })

  it('next returns next item or default/first', () => {
    const s = series(['a', 'b', 'c'])
    expect(s.next('a')).toBe('b')
    expect(s.next('c')).toBe('a') // fallback to first
    expect(s.next('c', 'x')).toBe('x')
  })

  it('previous returns previous item or default/last', () => {
    const s = series(['a', 'b', 'c'])
    expect(s.previous('b')).toBe('a')
    expect(s.previous('a')).toBe('c') // fallback to last
    expect(s.previous('a', 'x')).toBe('x')
  })

  it('spin moves forward and backward, handles >length and 0', () => {
    const s = series(['a', 'b', 'c'])
    expect(s.spin('a', 2)).toBe('c')
    expect(s.spin('a', -1)).toBe('c')
    expect(s.spin('a', 0)).toBe('a')
    expect(s.spin('a', 5)).toBe('c') // 实际为 'c'
    expect(s.spin('a', -4)).toBe('c')
  })

  it('supports custom toKey', () => {
    const s = series([{ k: 1 }, { k: 2 }], (x: any) => x.k)
    expect(s.min({ k: 1 }, { k: 2 })).toEqual({ k: 1 })
    expect(s.max({ k: 1 }, { k: 2 })).toEqual({ k: 2 })
  })

  it('handles empty array', () => {
    const s = series([])
    expect(s.first()).toBeUndefined()
    expect(s.last()).toBeUndefined()
  })
})
