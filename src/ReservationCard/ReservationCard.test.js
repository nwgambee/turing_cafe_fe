import React from 'react';
import ReactDOM from 'react-dom';
import ReservationCard from './ReservationCard';
import {shallow} from 'enzyme';

it('should match the snapshot', () => {
  const wrapper = shallow(<ReservationCard
    name='Noah'
    id={123}
    date='12/13'
    time='3:45'
    number={4}
    cancelReservation={jest.fn()}
    />)
  expect(wrapper).toMatchSnapshot();
})

it.skip('should invoke cancelReservation when remove-res-btn is clicked', () => {
  const wrapper = shallow(<ReservationCard
    name='Noah'
    id={123}
    date='12/13'
    time='3:45'
    number={4}
    cancelReservation={jest.fn()}
    />)
  wrapper.instance().cancelReservation = jest.fn();
  wrapper.instance().forceUpdate();
  wrapper.find('.remove-res-btn').simulate('click')
  expect(wrapper.instance().cancelReservation).toHaveBeenCalled();
})
