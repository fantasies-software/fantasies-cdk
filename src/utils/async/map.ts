export async function map<T, K>(array: readonly T[], asyncMapFunc: (item: T, index: number) => Promise<K>): Promise<K[]> {
  if (!array) {
    return []
  }
  const result: K[] = []
  let index = 0
  for (const value of array) {
    const newValue = await asyncMapFunc(value, index)
    index++
    result.push(newValue)
  }
  return result
}
