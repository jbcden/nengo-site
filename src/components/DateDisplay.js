import React, { Component } from 'react';
import DateInput from './DateInput';

class DateDisplay extends Component {
  state = {
    dateOutput: ''
  };

  handleInputChange = date => {
    this.setState({ dateOutput: date });
  };

  render() {
    return (
      <div>
        <p>{this.state.dateOutput}</p>
        <DateInput onInputChange={this.handleInputChange} />
      </div>
    );
  }
}

export default DateDisplay;
