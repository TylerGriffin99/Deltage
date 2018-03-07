import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import History from '../../../client/components/Graph/History'

Enzyme.configure({adapter: new Adapter()})

test('<History />', () => {
  const expected = /USD for the last Hour/
  const wrapper = shallow(<History />)
  expect(wrapper.find('h1').text()).toMatch(expected)
})
