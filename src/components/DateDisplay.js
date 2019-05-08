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
      <div class="date-display">
        <h2>{this.state.dateOutput || 'Please enter a year'}</h2>
        <DateInput onInputChange={this.handleInputChange} />
      </div>
    );
  }
}

export default DateDisplay;
