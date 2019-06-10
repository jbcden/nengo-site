import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { japaneseYear } from 'nengo';

class DateField extends Component {
  static propTypes = {
    dateOutput: PropTypes.string.isRequired,
    validate: PropTypes.func,
    onInputChange: PropTypes.func
  };

  state = {
    dateOutput: 'Please enter a year'
  };

  onInputChange = e => {
    const yearInput = Number.parseInt(e.target.value);
    const japaneseYearInfo = japaneseYear(yearInput);
    const error = this.validate(japaneseYearInfo, yearInput);
    const value =
      error ||
      `${japaneseYearInfo.names.english} Year ${yearInput -
        japaneseYearInfo.startYear +
        1}`;
    this.setState({ dateOutput: value });
  };

  validate = (japaneseYearInfo, yearInput) => {
    if (!japaneseYearInfo)
      return 'The year you have entered is not yet supported.';
    if (!Number.isInteger(yearInput)) return 'Please enter a valid year';
    return false;
  };

  render() {
    return (
      <div class="date-display">
        <h2>{this.state.dateOutput}</h2>
        <input type="number" onChange={this.onInputChange} />;
      </div>
    );
  }
}

export default DateField;
