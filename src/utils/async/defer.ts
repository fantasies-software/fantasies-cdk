import { tryit } from './tryit'

export async function defer<TResponse>(func: (
  register: (
    fn: (error?: any) => any,
    options?: { rethrow?: boolean }
  ) => void
) => Promise<TResponse>): Promise<TResponse> {
  const callbacks: {
    fn: (error?: any) => any
    rethrow: boolean
  }[] = []
  const register = (
    fn: (error?: any) => any,
    options?: { rethrow?: boolean },
  ) => {
    callbacks.push({
      fn,
      rethrow: options && typeof options.rethrow === 'boolean' ? options.rethrow : false,
    })
  }
  const [err, response] = await tryit(func)(register)
  for (const { fn, rethrow } of callbacks) {
    const [rethrown] = await tryit(fn)(err)
    if (rethrown && rethrow) {
      throw rethrown
    }
  }
  if (err) {
    throw err
  }
  return response
}
