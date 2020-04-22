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

const buttonsAreHighlighted = (buttons, shouldAdd) => {
  buttons.forEach(buttonNumber => {
    const buttonClassList = document.querySelectorAll('button')[buttonNumber - 1].classList
    if (shouldAdd) return buttonClassList.add('highlight')
    return buttonClassList.remove('highlight')
  })
}

const app = () => {
  const main = document.querySelector('main')
  main.append(...createButtons(CONFIG.RANGE))
  let currentlySelectedNumber = null
  let currentlySelectedRange = []
  main.addEventListener('click', event => {
    const targetedNumber = Number.parseInt(event.target.dataset.number, 10)
    if (!targetedNumber) return
    buttonsAreHighlighted(currentlySelectedRange, false)
    if (currentlySelectedNumber !== targetedNumber) {
      currentlySelectedRange = divisibleByWithinRange(targetedNumber, CONFIG.RANGE)
      buttonsAreHighlighted(currentlySelectedRange, true)
      currentlySelectedNumber = targetedNumber
    } else {
      currentlySelectedNumber = null
    }
  })
}

export default app
