export function toInt<T extends number | null = number>(
  value: any,
  defaultValue?: T,
): number | T {
  let def: number | T
  if (defaultValue === undefined) {
    def = 0 as T
  }
  else {
    def = defaultValue
  }
  if (value === null || value === undefined) {
    return def as T
  }
  const result = Number.parseInt(value)
  if (Number.isNaN(result)) {
    return def as T
  }
  return result as T
}
