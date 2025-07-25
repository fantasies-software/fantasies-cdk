import { fork } from '../array/fork'
import { list } from '../array/list'
import { sort } from '../array/sort'
import { AggregateError } from './aggregate-error'
import { tryit } from './tryit'

interface WorkItemResult<K> {
  index: number
  result: K
  error: any
}

export async function parallel<T, K>(limit: number, array: readonly T[], func: (item: T) => Promise<K>): Promise<K[]> {
  const work = array.map((item, index) => ({
    index,
    item,
  }))
  // Process array items
  const processor = async (res: (value: WorkItemResult<K>[]) => void) => {
    const results: WorkItemResult<K>[] = []
    while (true) {
      const next = work.pop()
      if (!next) {
        return res(results)
      }
      const [error, result] = await tryit(func)(next.item)
      results.push({
        error,
        result: result as K,
        index: next.index,
      })
    }
  }
  // Create queues
  const queues = list(1, limit).map(() => new Promise(processor))
  // Wait for all queues to complete
  const itemResults = (await Promise.all(queues)) as WorkItemResult<K>[][]
  const [errors, results] = fork(
    sort(itemResults.flat(), r => r.index),
    x => !!x.error,
  )
  if (errors.length > 0) {
    throw new AggregateError(errors.map(error => error.error))
  }
  return results.map(r => r.result)
}
