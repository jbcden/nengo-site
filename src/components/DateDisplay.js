import React, { Component } from 'react';
import DateInput from './DateInput';

class DateDisplay extends Component {
  state = {
    dateInput: 'Heisei 21'
  };

  handleInputChange = date => {
    this.setState({ dateInput: date });
  };

  render() {
    return (
      <div>
        <p>{this.state.dateInput}</p>
        <DateInput onInputChange={this.handleInputChange} />
      </div>
    );
  }
}

export default DateDisplay;
