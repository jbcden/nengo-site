import React, { Component } from 'react';
import DateInput from './DateInput';

class DateDisplay extends Component {
  state = {
    dateInput: 'Heisei 21'
  };

  render() {
    return (
      <div>
        <p>{this.state.dateInput}</p>
        <DateInput />
      </div>
    );
  }
}

export default DateDisplay;
