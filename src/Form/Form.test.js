import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import {shallow} from 'enzyme';

it('should match the snapshot', () => {
  let wrapper = shallow(<Form addReservation={jest.fn()} />)
  expect(wrapper).toMatchSnapshot();
})
