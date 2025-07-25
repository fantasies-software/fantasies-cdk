export function toInt<T extends number | null = number>(
  value: any,
  defaultValue?: T,
): number | T {
  let def
  if (defaultValue === undefined) {
    def = 0
  }
  else {
    def = defaultValue
  }
  if (value === null || value === undefined) {
    return def as number as T
  }
  const result = Number.parseInt(value)
  if (Number.isNaN(result)) {
    return def as number as T
  }
  else {
    return result as number as T
  }
}
