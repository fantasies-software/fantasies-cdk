import { capitalize } from './capitalize'

export function dash(str: string): string {
  const parts
    = str
      ?.replace(/([A-Z])+/g, capitalize)
      ?.split(/(?=[A-Z])|[.\-\s_]/)
      .map(x => x.toLowerCase()) ?? []
  if (parts.length === 0)
    return ''
  if (parts.length === 1)
    return parts[0]
  return parts.reduce((acc, part) => {
    return `${acc}-${part.toLowerCase()}`
  })
}
