import React, { Component } from 'react';
import './App.css';

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
      // form component here
      </div>
      <div className='resy-container'>
      // card container here with this.state passed through to it 
      </div>
    </div>
    )
  }
}

export default App;
