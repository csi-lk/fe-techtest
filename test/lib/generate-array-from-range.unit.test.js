import generateArrayFromRange from '../../src/lib/generate-array-from-range'

describe('generateArrayFromRange', () => {
  it.each([128, 10, 57])('should return an array starting at 1 to n number', range => {
    const generated = generateArrayFromRange(range)
    expect(generated.length).toBe(range)
    expect(generated[0]).toBe(1)
    expect(generated[generated.length - 1]).toBe(range)
  })
})
