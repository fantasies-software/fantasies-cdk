/**
 *  Get a value from an object by a path string.
 *  The path can include nested properties and array indices
 *  eg: get({ a: { b: { c: 1 } } }, 'a.b.c') returns 1.
 */
export function get<TDefault = unknown>(value: any, path: string, defaultValue?: TDefault): TDefault {
  if (!path) {
    return value
  }
  // lodash-style path parser: matches dot, bracket, and quoted keys
  const regex = /[^.[\]]+|\[(?:([^"'\]]+)|["'](.+?)["'])\]/g
  const segments: string[] = []
  let match: RegExpExecArray | null = regex.exec(path)
  while (match) {
    let seg
    if (match[1] !== undefined && match[1] !== null) {
      seg = match[1]
    }
    else if (match[2] !== undefined && match[2] !== null) {
      seg = match[2]
    }
    else {
      seg = match[0]
    }
    segments.push(seg)
    match = regex.exec(path)
  }
  let current: any = value
  for (const key of segments) {
    if (current === null || current === undefined) {
      return defaultValue as TDefault
    }
    current = current[key]
  }
  if (current === undefined) {
    return defaultValue as TDefault
  }
  return current
}
