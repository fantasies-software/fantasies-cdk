import { isFunction } from '../type/typed'

/**
 *  Generates a range of numbers or values based on the provided parameters. include the start and end values.
 *  eg: range(5) // returns [0, 1, 2, 3, 4, 5]
 *  eg: range(1, 5) // returns [1, 2, 3, 4, 5]
 *  eg: range(1, 5, i => i * 2) // returns [2, 4, 6, 8, 10]
 *  eg: range(1, 5, 'value', 2) // returns ['value', 'value', 'value', 'value']
 */
export function* range<T = number>(
  startOrLength: number,
  end?: number,
  valueOrMapper: T | ((i: number) => T) = i => i as T,
  step: number = 1,
): Generator<T> {
  let mapper
  if (isFunction(valueOrMapper)) {
    mapper = valueOrMapper
  }
  else {
    mapper = () => valueOrMapper
  }
  let start
  if (end) {
    start = startOrLength
  }
  else {
    start = 0
  }
  let final
  if (end !== undefined && end !== null) {
    final = end
  }
  else {
    final = startOrLength
  }
  for (let i = start; i <= final; i += step) {
    yield mapper(i)
    if (i + step > final)
      break
  }
}
