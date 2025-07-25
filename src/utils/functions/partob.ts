export function partob<T, K, PartialArgs extends Partial<T>>(fn: (args: T) => K, argobj: PartialArgs) {
  return (restobj: Omit<T, keyof PartialArgs>): K =>
    fn({
      ...(argobj as Partial<T>),
      ...(restobj as Partial<T>),
    } as T)
}
