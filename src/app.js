import CONFIG from './config'
import generateArrayFromRange from './lib/generate-array-from-range'
import divisibleByWithinRange from './lib/divisible-by-within-range'

const createButtons = range =>
  generateArrayFromRange(range).map(number => {
    const button = document.createElement('button')
    button.type = 'button'
    button.dataset.number = number
    button.textContent = number
    return button
  })

const app = () => {
  const main = document.querySelector('main')
  main.append(...createButtons(CONFIG.RANGE))
  let currentlySelectedNumber = null
  let currentlySelectedRange = []
  main.addEventListener('click', event => {
    const targetedNumber = Number.parseInt(event.target.dataset.number, 10)
    currentlySelectedRange.forEach(buttonNumber => {
      document.querySelectorAll('button')[buttonNumber - 1].classList.remove('highlight')
    })
    if (currentlySelectedNumber !== targetedNumber) {
      currentlySelectedRange = divisibleByWithinRange(targetedNumber, CONFIG.RANGE)
      currentlySelectedRange.forEach(buttonNumber => {
        document.querySelectorAll('button')[buttonNumber - 1].classList.add('highlight')
      })
    }
    currentlySelectedNumber = targetedNumber
  })
}

export default app
