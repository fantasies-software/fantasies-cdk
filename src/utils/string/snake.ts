import { capitalize } from './capitalize'

export function snake(str: string, options?: {
  splitOnNumber?: boolean
}): string {
  const parts
    = str
      ?.replace(/([A-Z])+/g, capitalize)
      .split(/(?=[A-Z])|[.\-\s_]/)
      .map(x => x.toLowerCase()) ?? []
  if (parts.length === 0)
    return ''
  if (parts.length === 1)
    return parts[0]
  const result = parts.reduce((acc, part) => {
    return `${acc}_${part.toLowerCase()}`
  })
  return options?.splitOnNumber === false
    ? result
    : result.replace(/([A-Z]\d)/i, val => `${val[0]!}_${val[1]!}`)
}
