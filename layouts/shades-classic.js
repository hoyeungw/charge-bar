// baro legacy style as of 1.x
import { Amber }         from '@palett/cards'
import { Dye }           from '@palett/dye'
import { SHADE_CHARSET } from '../resources/chars'

const amber = Dye.hex(Amber.base)

export const layout = {
  sentence: `{start} ${amber('{bar}')} | {percent}% | {degree} | ETA: {eta}s`,
  char: SHADE_CHARSET,
  size: 10,
  autoZero: true
}