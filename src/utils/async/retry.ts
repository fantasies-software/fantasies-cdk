import { range } from '../array/range'
import { sleep } from './sleep'
import { tryit } from './tryit'

export async function retry<TResponse>(options: {
  times?: number
  delay?: number | null
  backoff?: (count: number) => number
}, func: (exit: (err: any) => void) => Promise<TResponse>): Promise<TResponse> {
  const times = options && typeof options.times === 'number' ? options.times : 3
  const delay = options && typeof options.delay === 'number' ? options.delay : null
  const backoff = options && typeof options.backoff === 'function' ? options.backoff : null
  for (const i of range(1, times)) {
    const [err, result] = (await tryit(func)((err: any) => {
      throw new Error(`_exited:${err}`)
    })) as [any, TResponse]
    if (!err) {
      return result
    }
    if (err && typeof err.message === 'string' && err.message.startsWith('_exited:')) {
      throw err.message.slice(9)
    }
    if (i === times) {
      throw err
    }
    if (delay) {
      await sleep(delay)
    }
    if (backoff) {
      await sleep(backoff(i))
    }
  }
  // Logically, we should never reach this
  // code path. It makes the function meet
  // strict mode requirements.
  /* istanbul ignore next */
  return undefined as unknown as TResponse
}
