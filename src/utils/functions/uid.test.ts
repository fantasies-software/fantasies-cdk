import { describe, expect, it } from 'vitest'
import { uid } from './uid'

describe('uid', () => {
  it('returns a string of the given length', () => {
    expect(uid(10)).toHaveLength(10)
  })
  it('returns different strings for different calls', () => {
    expect(uid(8)).not.toBe(uid(8))
  })
  it('supports specials', () => {
    const specials = '!@#'
    const result = uid(5, '!@#')
    expect(result.length).toBe(5)
    expect(result).toMatch(new RegExp(`^[A-Za-z0-9${specials.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}]+$`))
  })
})
