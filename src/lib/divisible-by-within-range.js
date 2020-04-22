import generateArrayOfNumbers from './generate-array-from-range'

const divisibleByWithinRange = (targetNumber, range) =>
  generateArrayOfNumbers(range).filter(
    number => (targetNumber / number) % 1 === 0 || !(number % targetNumber),
  )

export default divisibleByWithinRange
