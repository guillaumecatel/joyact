export const toFixedNumber = (num: number, digits: number, base = 10) => {
  const pow = Math.pow(base, digits)
  return Math.round(num * pow) / pow
}
