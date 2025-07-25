import { isFunction } from '../typed'

/**
 *  Generates a range of numbers or values based on the provided parameters.
 *  eg: range(5) // returns [0, 1, 2, 3, 4]
 *  eg: range(1, 5) // returns [1, 2, 3, 4]
 *  eg: range(1, 5, i => i * 2) // returns [2, 4, 6, 8]
 *  eg: range(1, 5, 'value', 2) // returns ['value', 'value', 'value', 'value']
 */
export function* range<T = number>(
  startOrLength: number,
  end?: number,
  valueOrMapper: T | ((i: number) => T) = i => i as T,
  step: number = 1,
): Generator<T> {
  let mapper: (i: number) => T
  if (isFunction(valueOrMapper)) {
    mapper = valueOrMapper as (i: number) => T
  }
  else {
    mapper = () => valueOrMapper as T
  }
  let start: number, final: number
  if (typeof end === 'number') {
    start = startOrLength
    final = end
  }
  else {
    start = 0
    final = startOrLength
  }
  for (let i = start; i < final; i += step) {
    yield mapper(i)
  }
}
