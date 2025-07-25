import { capitalize } from './capitalize'

export function title(str: string | null | undefined): string {
  if (!str)
    return ''
  return str
    .split(/(?=[A-Z])|[.\-\s_]/)
    .map(s => s.trim())
    .filter(s => !!s)
    .map(s => capitalize(s.toLowerCase()))
    .join(' ')
}
