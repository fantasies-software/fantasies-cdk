/**
 * Checks if the provided value is a symbol.
 * @param value - The value to check
 * @returns True if the value is a symbol, false otherwise
 */
export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol'
}

/**
 * Checks if the provided value is an array.
 * @param value - The value to check
 * @returns True if the value is an array, false otherwise
 */
export function isArray<T>(value: unknown): value is T[] {
  return Array.isArray(value)
}

/**
 * Checks if the provided value is an object (plain object, not array, function, etc.).
 * @param value - The value to check
 * @returns True if the value is a plain object, false otherwise
 */
export function isObject(value: unknown): value is object {
  return value !== null && typeof value === 'object' && value.constructor === Object
}

/**
 * Checks if the provided value is null or undefined.
 * @param value - The value to check
 * @returns True if the value is null or undefined, false otherwise
 */
export function isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined
}

/**
 * Checks if the provided value is a primitive type (string, number, boolean, symbol, null, or undefined).
 * @param value - The value to check
 * @returns True if the value is a primitive type, false otherwise
 */
export function isPrimitive(value: unknown): value is string | number | boolean | symbol | null | undefined {
  return (
    typeof value === 'string'
    || typeof value === 'number'
    || typeof value === 'boolean'
    || typeof value === 'symbol'
    || value === null
    || value === undefined
  )
}

/**
 * Checks if the provided value is a function.
 * @param value - The value to check
 * @returns True if the value is a function, false otherwise
 */
export function isFunction(value: unknown): value is Function {
  return typeof value === 'function'
}

/**
 * Checks if the provided value is a string.
 * @param value - The value to check
 * @returns True if the value is a string, false otherwise
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

/**
 * Checks if the provided value is a number (excluding NaN).
 * @param value - The value to check
 * @returns True if the value is a number and not NaN, false otherwise
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !Number.isNaN(value)
}

/**
 * Checks if the provided value is an integer.
 * @param value - The value to check
 * @returns True if the value is an integer, false otherwise
 */
export function isInt(value: unknown): value is number {
  return isNumber(value) && Number.isInteger(value)
}

/**
 * Checks if the provided value is a float.
 * @param value - The value to check
 * @returns True if the value is a float, false otherwise
 */
export function isFloat(value: unknown): value is number {
  return isNumber(value) && !Number.isInteger(value)
}

/**
 * Checks if the provided value is a Date object.
 * @param value - The value to check
 * @returns True if the value is a Date object, false otherwise
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date && !Number.isNaN(value.getTime())
}

/**
 * Checks if the provided value is a RegExp object.
 * @param value - The value to check
 * @returns True if the value is a RegExp object, false otherwise
 */
export function isRegexp(value: unknown): value is RegExp {
  return value instanceof RegExp
}

/**
 * Checks if the provided value is a Promise.
 * @param value - The value to check
 * @returns True if the value is a Promise, false otherwise
 */
export function isPromise(value: unknown): value is Promise<unknown> {
  return value instanceof Promise
    || (value !== null
      && typeof value === 'object'
      && typeof (value as any).then === 'function'
      && typeof (value as any).catch === 'function')
}

/**
 * Checks if the provided value is empty.
 * @param value - The value to check
 * @returns True if the value is considered empty, false otherwise
 */
export function isEmpty(value: unknown): boolean {
  // Primitives
  if (value === null || value === undefined)
    return true
  if (typeof value === 'boolean')
    return false
  if (typeof value === 'number')
    return value === 0
  if (typeof value === 'string')
    return value.length === 0
  if (typeof value === 'symbol')
    return false
  if (typeof value === 'function')
    return false

  // Date
  if (isDate(value))
    return Number.isNaN(value.getTime())

  // Array-like objects
  if (isArray(value))
    return value.length === 0

  // Objects with size property (Set, Map)
  if (typeof (value as any).size === 'number')
    return (value as any).size === 0

  // Objects with length property
  if (typeof (value as any).length === 'number')
    return (value as any).length === 0

  // Plain objects
  if (typeof value === 'object') {
    return Object.keys(value).length === 0
  }

  return false
}

/**
 * Performs deep equality comparison between two values.
 * @param pre - The first value to compare
 * @param next - The second value to compare
 * @returns True if the values are deeply equal, false otherwise
 */
export function isEqual<T>(pre: T, next: T): boolean {
  // Same reference or same primitive value (handles NaN, +0/-0, etc.)
  if (Object.is(pre, next))
    return true

  // Handle null/undefined cases
  if (pre === null || pre === undefined || next === null || next === undefined) {
    return pre === next
  }

  // Different types
  if (typeof pre !== typeof next)
    return false

  // Handle Date objects
  if (isDate(pre) && isDate(next)) {
    return pre.getTime() === next.getTime()
  }

  // Handle RegExp objects
  if (isRegexp(pre) && isRegexp(next)) {
    return pre.toString() === next.toString()
  }

  // Handle Arrays
  if (isArray(pre) && isArray(next)) {
    if (pre.length !== next.length)
      return false
    for (let i = 0; i < pre.length; i++) {
      if (!isEqual(pre[i], next[i]))
        return false
    }
    return true
  }

  // Handle primitives
  if (typeof pre !== 'object') {
    return pre === next
  }

  // Handle objects (including custom objects)
  if (typeof pre === 'object' && typeof next === 'object') {
    const preKeys = Reflect.ownKeys(pre as object)
    const nextKeys = Reflect.ownKeys(next as object)

    // Different number of keys
    if (preKeys.length !== nextKeys.length)
      return false

    // Check if all keys exist in both objects and values are equal
    for (const key of preKeys) {
      if (!Reflect.has(next as object, key))
        return false
      if (!isEqual((pre as any)[key], (next as any)[key]))
        return false
    }

    return true
  }

  return false
}
