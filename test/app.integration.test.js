import puppeteer from 'puppeteer'

import app from '../src/app'
import * as config from '../src/config'

describe('app', () => {
  describe('render', () => {
    it.each([72, 144, 300])('Should generate %s buttons on the page', range => {
      config.default = {
        ...config.default,
        RANGE: range,
      }
      const wrapper = document.createElement('main')
      app()
      expect(wrapper.querySelector('main div')).toHaveLength(range)
    })
    it.each([368, 768, 1024, 1270])('Renders at %s width', async width => {
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      page.setViewport({ width, height: 768 })
      await page.goto('http://localhost:8080')
      const image = await page.screenshot()
      expect(image).toMatchImageSnapshot()
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
        const wrapper = document.createElement('main')
        app()
        wrapper.querySelector('main div')[number].simulate('click')
        highlighted.forEach(highlightedNumber => {
          expect(wrapper.querySelector('main div')[highlightedNumber]).toHaveClass('highlighted')
        })
      },
    )
    it('should remove highlight when clicking on button again', () => {
      const wrapper = document.createElement('main')
      app()
      wrapper.querySelector('main div')[101].simulate('click')
      expect(wrapper.querySelector('main div')[1]).toHaveClass('highlighted')
      wrapper.querySelector('main div')[101].simulate('click')
      expect(wrapper.querySelector('main div')[1]).notToHaveClass('highlighted')
    })
  })
})
