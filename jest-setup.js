/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/dom'
import '@testing-library/jest-dom'
import toMatchImageSnapshot from 'jest-image-snapshot'

expect.extend({ toMatchImageSnapshot })

global.mount = element => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = element
  return wrapper
}
