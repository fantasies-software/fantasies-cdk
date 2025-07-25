import { iterate } from '../array/iterate'
import { random } from './random'

export function uid(length: number, specials: string = '') {
  const characters
    = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789${specials}`
  return iterate(
    length,
    (acc) => {
      return acc + characters.charAt(random(0, characters.length - 1))
    },
    '',
  )
}
