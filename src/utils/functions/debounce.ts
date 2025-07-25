import type { DebounceFunction } from './type'

export function debounce<TArgs extends any[]>({ delay }: { delay: number }, func: (...args: TArgs) => any) {
  let timer: NodeJS.Timeout | undefined
  let active = true

  const debounced: DebounceFunction<TArgs> = (...args: TArgs) => {
    if (active) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        active && func(...args)
        timer = undefined
      }, delay)
    }
    else {
      func(...args)
    }
  }
  debounced.isPending = () => {
    return timer !== undefined
  }
  debounced.cancel = () => {
    active = false
    if (timer !== undefined) {
      clearTimeout(timer)
      timer = undefined
    }
  }
  debounced.flush = (...args: TArgs) => func(...args)

  return debounced
}
