import React, { Component } from 'react';
import './App.css';
import ReservationContainer from '../ReservationsContainer/ReservationContainer.js'

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


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
      </div>
      <div className='resy-container'>
        <ReservationContainer reservations={this.state.reservations} />
      </div>
    </div>
    )
  }
}

export default App;
