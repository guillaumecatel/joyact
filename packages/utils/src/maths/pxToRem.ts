import { toFixedNumber } from './toFixedNumber'

export const pxToRem = (px: number, base = 16, digit = 3) =>
  toFixedNumber((1 / base) * px, digit)
