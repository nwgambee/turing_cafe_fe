import React from 'react';
import ReactDOM from 'react-dom';
import ReservationCard from './ReservationCard';
import {shallow} from 'enzyme';

it('should match the snapshot', () => {
  let wrapper = shallow(<ReservationCard
    name='Noah'
    id={123}
    date='12/13'
    time='3:45'
    number={4}
    cancelReservation={jest.fn()}
    />)
  expect(wrapper).toMatchSnapshot();
})
