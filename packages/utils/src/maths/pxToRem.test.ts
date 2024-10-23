import { pxToRem } from './pxToRem'

describe('Utils / Maths / pxToRem', () => {
  it('should return converted value with default base (16)', () => {
    expect(pxToRem(8)).toBe('0.5rem')
  })

  it('should return converted value with default base 10', () => {
    expect(pxToRem(16, 10)).toBe('1.6rem')
  })
})
