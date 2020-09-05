import React from 'react'
import { render } from '@testing-library/react'
import Counter from './Counter'
import App from './App'
// setup file
import { shallow, mount } from 'enzyme'

describe('Counter Testing app', () => {
  let wrapper
  beforeEach(() => {
    // wrapper = shallow(<Counter />)
    wrapper = mount(<App />)
  })

  test('renders the title Counter', () => {
    // console.log(wrapper.debug())
    expect(wrapper.find('h1').text()).toContain('Counter')
    //old version, comes with create-react-app
    // const { getByText } = render(<App />)
    // const linkElement = getByText('Counter')
    // expect(linkElement).toBeInTheDocument()
  })
  test('render a button with text of "increment"', () => {
    // const wrapper = shallow(<App />)
    expect(wrapper.find('#increment-btn').text()).toBe('Increment')
  })

  test('render the initial value of state in a div', () => {
    expect(wrapper.find('#counter-value').text()).toBe('0')
  })

  test('render the click event of increment button and increment counter value', () => {
    wrapper.find('#increment-btn').simulate('click') // simulates click
    expect(wrapper.find('#counter-value').text()).toBe('1')
  })

  test('render the click event of decrement button and decrement counter value', () => {
    wrapper.find('#increment-btn').simulate('click')
    wrapper.find('#decrement-btn').simulate('click')

    expect(wrapper.find('#counter-value').text()).toBe('0')
  })
  // Extra test
  test('render the click event of decrement button and decrement counter value if greater than 0', () => {
    wrapper.find('#decrement-btn').simulate('click')
    const value = wrapper.find('#counter-value').text()
    expect(parseInt(value)).toBeGreaterThanOrEqual(0)
  })
})
