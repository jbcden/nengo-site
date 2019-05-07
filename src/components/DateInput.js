import React, { Component } from 'react';
import { japaneseYear } from 'nengo';

class DateInput extends Component {
  handleChange = e => {
    const yearInput = Number.parseInt(e.target.value);
    const japaneseYearInfo = japaneseYear(yearInput);

    if (japaneseYearInfo && Number.isInteger(yearInput)) {
      this.props.onInputChange(
        `${japaneseYearInfo.names.english} Year ${yearInput -
          japaneseYearInfo.startYear +
          1}`
      );
    } else if (yearInput) {
      this.props.onInputChange(
        'The year you have entered is not yet supported.'
      );
    } else {
      this.props.onInputChange('Please enter a year');
    }
  };

  render() {
    return <input type="number" onChange={this.handleChange} />;
  }
}

export default DateInput;
