import React, { Component } from 'react';

class DateInput extends Component {
  handleChange = e => {
    this.props.onInputChange(e.target.value);
  };

  render() {
    return <input type="text" onChange={this.handleChange} />;
  }
}

export default DateInput;
