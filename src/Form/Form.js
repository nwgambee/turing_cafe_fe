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
          value={}
          onChange={this.handleChange}
        />
        <input
          placeholder='Date'
          value={}
          onChange={this.handleChange}
        />
        <input
          placeholder='Time'
          value={}
          onChange={this.handleChange}
        />
        <input
          placeholder='# of Guests'
          value={}
          onChange={this.handleChange}
        />
    )
  }
}


export default Form;
