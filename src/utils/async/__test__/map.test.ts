import { describe, expect, it } from 'vitest'
import { map } from '../map'

describe('map', () => {
  it('maps array asynchronously', async () => {
    const result = await map([1, 2, 3], async x => x * 2)
    expect(result).toEqual([2, 4, 6])
  })

  it('returns empty array for empty input', async () => {
    const result = await map([], async x => x)
    expect(result).toEqual([])
  })

  it('returns empty array for null/undefined input', async () => {
    // @ts-expect-error purposely test null
    expect(await map(null, async x => x)).toEqual([])
    // @ts-expect-error purposely test undefined
    expect(await map(undefined, async x => x)).toEqual([])
  })
})
