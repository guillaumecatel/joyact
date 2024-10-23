import { scale } from './scale'

const FIXTURES = {
  goldenRatio: [16, 25.89, 41.89, 67.78, 109.67, 177.45, 287.11],
  majorThird: [16, 20, 25, 31.25, 39.06, 48.83, 61.04],
  perfectFourth: [16, 21.33, 28.43, 37.9, 50.52, 67.34, 89.76],
}

describe('Utils / Maths / scale', () => {
  it('should scale array with golden ratio', () => {
    expect(scale(16, 7, 1.618)).toHaveLength(7)
    expect(scale(16, 7, 1.618)).toStrictEqual(FIXTURES.goldenRatio)
  })

  it('should scale array with major third ratio', () => {
    expect(scale(16, 7, 1.250)).toHaveLength(7)
    expect(scale(16, 7, 1.250)).toStrictEqual(FIXTURES.majorThird)
  })

  it('should scale array with perfect fourth ratio', () => {
    expect(scale(16, 7, 1.333)).toHaveLength(7)
    expect(scale(16, 7, 1.333)).toStrictEqual(FIXTURES.perfectFourth)
  })
})
