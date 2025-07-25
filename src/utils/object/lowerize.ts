import type { LowercasedKeys } from './type'
import { mapKeys } from './map-keys'

export function lowerize<T extends Record<string, any>>(obj: T) {
  return mapKeys(obj, k => k.toLowerCase()) as LowercasedKeys<T>
}
