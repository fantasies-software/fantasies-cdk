import { isArray } from '../typed'
import { AggregateError } from './aggregate-error'

type PromiseValues<T extends Promise<any>[]> = {
  [K in keyof T]: T[K] extends Promise<infer U> ? U : never
}

export async function all<T extends [Promise<any>, ...Promise<any>[]]>(
  promises: T
): Promise<PromiseValues<T>>
export async function all<T extends Promise<any>[]>(
  promises: T
): Promise<PromiseValues<T>>
export async function all<T extends Record<string, Promise<any>>>(
  promises: T
): Promise<{ [K in keyof T]: Awaited<T[K]> }>
export async function all<
  T extends Record<string, Promise<any>> | Promise<any>[],
>(promises: T) {
  let entries
  if (isArray(promises)) {
    entries = promises.map(p => [null, p] as [null, Promise<any>])
  }
  else {
    entries = Object.entries(promises)
  }

  const results = await Promise.all(
    entries.map(([key, value]) =>
      value
        .then(result => ({ result, exc: null, key }))
        .catch(exc => ({ result: null, exc, key })),
    ),
  )

  const exceptions = results.filter(r => r.exc)
  if (exceptions.length > 0) {
    throw new AggregateError(exceptions.map(e => e.exc))
  }

  if (isArray(promises)) {
    return results.map(r => r.result) as T extends Promise<any>[]
      ? PromiseValues<T>
      : unknown
  }

  return results.reduce(
    (acc, item) => ({
      ...acc,
      [item.key!]: item.result,
    }),
    {} as { [K in keyof T]: Awaited<T[K]> },
  )
}
