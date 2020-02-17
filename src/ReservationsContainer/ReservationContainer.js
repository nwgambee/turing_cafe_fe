import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard';

const ReservationContainer = ({reservations}) => {
  let reservationsList = reservations.map(reservation => {
    return <ReservationCard name={reservation.name} id={reservation.id} date={reservation.date} time={reservation.time} number={reservation.number} />
  })

  return (
    <section className='res-container'>
    {reservationsList}
    </section>
  )
}

export default ReservationContainer;
