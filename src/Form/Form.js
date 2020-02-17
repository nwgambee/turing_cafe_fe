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
    console.log(event);
  }

  render() {
    return (
      <form className='res-form'>
        <input
          placeholder='Name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          placeholder='Date'
          value={this.state.date}
          onChange={this.handleChange}
        />
        <input
          placeholder='Time'
          value={this.state.time}
          onChange={this.handleChange}
        />
        <input
          placeholder='# of Guests'
          value={this.state.number}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}


export default Form;
