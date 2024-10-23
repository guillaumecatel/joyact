import { range } from './range'
import { toFixedNumber } from './toFixedNumber'

export const scale = (value: number, size: number, ratio: number, digits = 3) => {
  return range(1, size).reduce<number[]>((acc, _, index) => {
    acc.push((index === 0) ? value : toFixedNumber(acc[index - 1]! * ratio, digits))
    return acc
  }, [])
}
