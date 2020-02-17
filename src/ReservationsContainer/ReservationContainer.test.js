import React from 'react';
import ReactDOM from 'react-dom';
import ReservationContainer from './ReservationContainer';
import {shallow} from 'enzyme';

it('should match the snapshot', () => {
  let wrapper = shallow(<ReservationContainer cancelReservation={jest.fn()} reservations={[]} />)
  expect(wrapper).toMatchSnapshot()
})
