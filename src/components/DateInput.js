import React, { Component } from 'react';
import { japaneseYear } from 'nengo';

class DateInput extends Component {
  handleChange = e => {
    const yearInput = Number.parseInt(e.target.value);
    const japaneseYearInfo = japaneseYear(yearInput);

    if (japaneseYearInfo) {
      this.props.onInputChange(
        `${japaneseYearInfo.names.english} ${yearInput -
          japaneseYearInfo.startYear +
          1}`
      );
    }
  };

  render() {
    return <input type="number" onChange={this.handleChange} />;
  }
}

export default DateInput;
