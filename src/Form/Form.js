import React, { Component } from 'react';

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
        <button className='make-res'>Make Reservation</button>
      </form>
    )
  }
}


export default Form;
