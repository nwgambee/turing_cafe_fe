import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard';

const ReservationContainer = ({reservations}) => {
  let reservationsList = reservations.map(reservation => {
    return <ReservationCard />
  })

  return (
    <section className='res-container'>
    {reservationsList}
    </section>
  )
}

export default ReservationContainer;
