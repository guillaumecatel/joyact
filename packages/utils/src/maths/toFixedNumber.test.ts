import { toFixedNumber } from './toFixedNumber'

describe('Utils / Maths / toFixedNumber', () => {
  it('should round a number with digits', () => {
    expect(toFixedNumber(3.14159265359, 2)).toBe(3.14)
  })

  it('should round a number with digits and base', () => {
    expect(toFixedNumber(3.14159265359, 2, 1)).toBe(3)
  })
})
