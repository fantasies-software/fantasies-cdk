export function template(
  str: string,
  data: Record<string, any>,
  regex = /\{\{(.+?)\}\}/g,
) {
  return str.replace(regex, (_, key) => {
    const trimmedKey = key.trim()
    return Object.prototype.hasOwnProperty.call(data, trimmedKey) ? data[trimmedKey] : `{{${key}}}`
  })
}
