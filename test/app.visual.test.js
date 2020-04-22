import puppeteer from 'puppeteer'

describe('visual regression', () => {
  it.skip.each([368, 768, 1024, 1270])('Renders at %s width', async width => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    page.setViewport({ width, height: 768 })
    await page.goto('http://localhost:8080')
    const image = await page.screenshot()
    expect(image).toMatchImageSnapshot()
  })
})
