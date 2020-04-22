import divisibleByWithinRange from '../../src/lib/divisible-by-within-range'

describe('divisibleByWithinRange', () => {
  it.each`
    number | returns
    ${25}  | ${[1, 5, 25, 50, 75, 100, 125]}
    ${57}  | ${[1, 3, 19, 57, 114]}
    ${144} | ${[1, 2, 3, 4, 6, 8, 9, 12, 16, 18, 24, 36, 48, 72, 144]}
  `('should return an array of numbers divisible by within range', ({ number, returns }) => {
    const generated = divisibleByWithinRange(number, 144)
    expect(generated).toEqual(returns)
  })
})
