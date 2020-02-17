import React, { Component } from 'react';
import './App.css';
import ReservationContainer from '../ReservationsContainer/ReservationContainer.js'
import Form from '../Form/Form.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    }
  }
  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(reservations => this.setState({reservations}))
      .catch(error => console.log(error))
  }
  addReservation = (newReservation) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        name: newReservation.name, date: newReservation.date, time: newReservation.time, number: parseInt(newReservation.number)
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch('http://localhost:3001/api/v1/reservations', options)
      .then(res => res.json())
      .then(reservation => this.setState({reservations: [...this.state.reservations, reservation]}))
      .catch(error => console.log(error))
  }
  cancelReservation = (id) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
      <div className='resy-container'>
        <ReservationContainer reservations={this.state.reservations} cancelReservation={this.cancelReservation} />
      </div>
    </div>
    )
  }
}

export default App;
