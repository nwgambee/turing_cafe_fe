import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  addReservation = (event) => {
    event.preventDefault();
    this.props.addReservation(this.state);
    this.setState({name: '', date: '', time: '', number: ''})
  }
  render() {
    return (
      <form className='res-form'>
        <input
          placeholder='Name'
          value={this.state.name}
          onChange={this.handleChange}
          name='name'
        />
        <input
          placeholder='Date'
          value={this.state.date}
          onChange={this.handleChange}
          name='date'
        />
        <input
          placeholder='Time'
          value={this.state.time}
          onChange={this.handleChange}
          name='time'
        />
        <input
          placeholder='# of Guests'
          value={this.state.number}
          onChange={this.handleChange}
          name='number'
        />
        <button className='make-res' onClick={this.addReservation} >Make Reservation</button>
      </form>
    )
  }
}


export default Form;
