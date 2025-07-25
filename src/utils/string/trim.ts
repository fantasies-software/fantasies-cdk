export function trim(str: string | null | undefined, charsToTrim: string = ' ') {
  if (!str)
    return ''
  const toTrim = charsToTrim.replace(/\W/g, '\\$&')
  const regex = new RegExp(`^[${toTrim}]+|[${toTrim}]+$`, 'g')
  return str.replace(regex, '')
}
