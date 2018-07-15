/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../src/pages/index.jsx'

describe('Home', () => {
  it('App Home', () => {
    const app = shallow(<App />)

    expect(app.find('.advantage_title').text()).toEqual('竞争优势')
  })
})

/*describe('With Snapshot Testing', () => {
  it('App shows "Hello world!"', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})*/
