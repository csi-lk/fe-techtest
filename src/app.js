import CONFIG from './config'
import generateArrayFromRange from './lib/generate-array-from-range'

const createButtons = range =>
  generateArrayFromRange(range).map(number => {
    const button = document.createElement('button')
    button.type = 'button'
    button.textContent = number
    return button
  })

const app = () => {
  document.querySelector('main').append(...createButtons(CONFIG.RANGE))
}

export default app
