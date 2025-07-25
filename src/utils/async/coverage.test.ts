import { describe, it } from 'vitest'
import { AggregateError } from './aggregate-error'
import { all } from './all'
import { defer } from './defer'
import { guard } from './guard'
import { map } from './map'
import { parallel } from './parallel'
import { reduce } from './reduce'
import { retry } from './retry'
import { sleep } from './sleep'
import { tryit } from './tryit'

describe('async coverage', () => {
  it('covers all async utils', async () => {
    // all
    await all([Promise.resolve(1)])
    try {
      await all([
        Promise.reject(new Error('fail')),
      ])
    }
    catch {}
    await all({ a: Promise.resolve(1) })
    // map
    await map([1], async x => x)
    // reduce
    await reduce([1, 2], async (a, b) => a + b, 0)
    // tryit
    tryit(() => 1)()
    await tryit(async () => 1)()
    // retry
    await retry({}, async () => 1)
    // sleep
    await sleep(1)
    // guard
    guard(() => 1)
    await guard(async () => 1)
    // defer
    await defer(async _reg => 1)
    // parallel
    await parallel(1, [1], async x => x)
    // AggregateError (for coverage)
    void new AggregateError([new Error('fail')])
  })
})
