import React from 'react';

const ReservationCard  = (props) => {
  return (
    <section className='res-card'>
      <h3>{props.name}</h3>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>{props.number}</p>
    </section>
  )
}

export default ReservationCard;
