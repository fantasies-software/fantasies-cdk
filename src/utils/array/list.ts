import { range } from './range'

/**
 *  Generates a list of values based on the provided parameters.
 *  eg: list(5) // returns [0, 1, 2, 3, 4]
 *  eg: list(1, 5) // returns [1, 2, 3, 4]
 *  eg: list(1, 5, i => i * 2) // returns [2, 4, 6, 8]
 *  eg: list(1, 5, 'value', 2) // returns ['value', 'value', 'value', 'value']
 */
export function list<T = number>(startOrLength: number, end?: number, valueOrMapper?: T | ((i: number) => T), step?: number): T[] {
  return Array.from(range(startOrLength, end, valueOrMapper, step))
}
