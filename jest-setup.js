/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/dom'
import '@testing-library/jest-dom'

global.mount = element => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = element
  return wrapper
}
