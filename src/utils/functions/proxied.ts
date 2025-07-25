export function proxied<T, K>(handler: (propertyName: T) => K): Record<string, K> {
  return new Proxy(
    {},
    {
      get: (target, propertyName: any) => handler(propertyName),
    },
  )
}
