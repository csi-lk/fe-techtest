import app from '../src/app'
import * as config from '../src/config'

const setupWrapper = () => {
  const wrapper = document.createElement('main')
  document.querySelector('body').append(wrapper)
  return wrapper
}

describe('app', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })
  describe('render', () => {
    it.each([72, 144, 300])('Should generate %s buttons on the page', range => {
      config.default = {
        ...config.default,
        RANGE: range,
      }
      const wrapper = setupWrapper()
      app()
      expect(wrapper.querySelectorAll('button')).toHaveLength(range)
    })
  })
  describe('function', () => {
    it.each`
      number | highlighted
      ${25}  | ${[1, 5, 25, 25, 50, 75, 100, 125]}
      ${57}  | ${[1, 3, 19, 57, 57, 114]}
      ${144} | ${[1, 2, 3, 4, 6, 8, 9, 12, 16, 18, 24, 36, 48, 72, 144]}
    `(
      `When I click $number number it should highlight $highlighted numbers`,
      ({ number, highlighted }) => {
        const wrapper = setupWrapper()
        app()
        wrapper.querySelectorAll('button')[number - 1].click()
        highlighted.forEach(highlightedNumber => {
          expect(
            wrapper
              .querySelectorAll('button')
              [highlightedNumber - 1].classList.contains('highlight'),
          ).toBeTruthy()
        })
      },
    )
    it('should remove highlight when clicking on button again', () => {
      const wrapper = setupWrapper()
      app()
      wrapper.querySelectorAll('main button')[101].click()
      expect(
        wrapper.querySelectorAll('main button')[1].classList.contains('highlight'),
      ).toBeTruthy()
      wrapper.querySelectorAll('main button')[101].click()
      expect(wrapper.querySelectorAll('main button')[1].classList.contains('highlight')).toBeFalsy()
    })
  })
})
