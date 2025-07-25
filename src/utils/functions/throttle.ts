import type { ThrottledFunction } from './type'

export function throttle<TArgs extends any[]>({ interval }: { interval: number }, func: (...args: TArgs) => any) {
  let ready = true
  let timer: NodeJS.Timeout | undefined

  const throttled: ThrottledFunction<TArgs> = (...args: TArgs) => {
    if (!ready)
      return
    func(...args)
    ready = false
    timer = setTimeout(() => {
      ready = true
      timer = undefined
    }, interval)
  }
  throttled.isThrottled = () => {
    return timer !== undefined
  }
  return throttled
}
