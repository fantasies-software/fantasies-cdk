export function guard<TFunction extends () => any>(func: TFunction, shouldGuard?: (err: any) => boolean): ReturnType<TFunction> extends Promise<any>
  ? Promise<Awaited<ReturnType<TFunction>> | undefined>
  : ReturnType<TFunction> | undefined {
  const _guard = (err: any) => {
    if (shouldGuard && !shouldGuard(err)) {
      throw err
    }
    return undefined as any
  }
  const isPromise = (result: any): result is Promise<any> => {
    return result instanceof Promise
  }
  try {
    const result = func()
    if (isPromise(result)) {
      return result.catch(_guard) as any
    }
    return result as any
  }
  catch (err) {
    return _guard(err)
  }
}
