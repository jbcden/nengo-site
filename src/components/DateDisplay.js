import React, { Component } from 'react';
import DateInput from './DateInput';

class DateDisplay extends Component {
  render() {
    return (
      <div>
        <p>Heisei 21</p>
        <DateInput />
      </div>
    );
  }
}

export default DateDisplay;
