export function toFloat<T extends number | null = number>(
  value: any,
  defaultValue?: T,
): number | T {
  let def: number | T;
  if (defaultValue === undefined) {
    def = 0.0 as T;
  } else {
    def = defaultValue;
  }
  if (value === null || value === undefined) {
    return def;
  }
  const result = Number.parseFloat(value);
  if (Number.isNaN(result)) {
    return def;
  } else {
    return result as T;
  }
}
