export function template(str: string, data: Record<string, any>, regex = /\{\{(.+?)\}\}/g) {
  return str.replace(regex, (_, key) =>
    Object.prototype.hasOwnProperty.call(data, key) ? data[key] : `{{${key}}}`)
}
