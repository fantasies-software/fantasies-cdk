import { random } from './random'

export function draw<T>(array: readonly T[]): T | null {
  const max = array.length
  if (max === 0) {
    return null
  }
  const index = random(0, max - 1)
  return array[index]
}
