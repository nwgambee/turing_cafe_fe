import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import {shallow} from 'enzyme';

it('should match the snapshot', () => {
  let wrapper = shallow(<Form addReservation={jest.fn()} />)
  expect(wrapper).toMatchSnapshot();
})

it('should update state when handleChange is invoked', () => {
  let wrapper = shallow(<Form addReservation={jest.fn()} />)
  const mockEvent = {
    preventDefault: jest.fn(),
    target: {
      name: 'name',
      value: 'Noah'
    }
  }
  wrapper.instance().handleChange(mockEvent)
  expect(wrapper.state('name')).toEqual('Noah')
})
