/**
 *  This is useful for creating hybrid objects that act as both data containers and callable functions, similar to Python's callable objects.
 */
export function callable<
  TValue,
  TObj extends Record<string | number | symbol, TValue>,
  TFunc extends (...args: any) => any,
>(obj: TObj, fn: (self: TObj) => TFunc): TObj & TFunc {
  const FUNC = () => {}
  return new Proxy(Object.assign(FUNC, obj), {
    get: (target, key: string) => target[key],
    set: (target, key: string, value: any) => {
      ;(target as any)[key] = value
      return true
    },
    apply: (target, self, args) => fn(Object.assign({}, target))(...args),
  }) as unknown as TObj & TFunc
}
