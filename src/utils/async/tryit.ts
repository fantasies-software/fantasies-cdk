import { isPromise } from '../typed'

export function tryit<Args extends any[], Return>(func: (...args: Args) => Return) {
  return (
    ...args: Args
  ): Return extends Promise<any>
    ? Promise<[Error, undefined] | [undefined, Awaited<Return>]>
    : [Error, undefined] | [undefined, Return] => {
    try {
      const result = func(...args)
      if (isPromise(result)) {
        return result
          .then(value => [undefined, value])
          .catch(err => [err, undefined]) as any
      }
      return [undefined, result] as any
    }
    catch (err) {
      return [err as any, undefined] as any
    }
  }
}
