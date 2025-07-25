import type { UppercasedKeys } from './type'
import { mapKeys } from './map-keys'

export function upperize<T extends Record<string, any>>(obj: T) {
  return mapKeys(obj, k => k.toUpperCase()) as UppercasedKeys<T>
}
