import React from 'react';
import './ReservationCard.css'

const ReservationCard  = (props) => {
  return (
    <section className='res-card'>
      <h3>{props.name}</h3>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>{props.number} guests</p>
      <button className='remove-res-btn' onClick={() => props.cancelReservation(props.id)} >Cancel</button>
    </section>
  )
}

export default ReservationCard;
