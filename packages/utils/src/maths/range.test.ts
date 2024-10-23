import { range } from './range'

describe('Utils / Maths / range', () => {
  it('should return array with a specific length', () => {
    expect(range(10, 20)).toHaveLength(11)
    expect(range(1, 20)).toHaveLength(20)
  })

  it('should return array with a specific step', () => {
    expect(range(4, 36, 4)).toHaveLength(9)
    expect(range(4, 36, 4)).toStrictEqual([4, 8, 12, 16, 20, 24, 28, 32, 36])
  })
})
