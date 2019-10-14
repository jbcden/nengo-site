import React from 'react';
import { shallow } from 'enzyme';
import DateField from './DateField';

let wrapper;
describe('DateField', () => {
  beforeEach(() => {
    wrapper = shallow(<DateField />);
  });

  it('should render the container, header and input', () => {
    expect(wrapper.find('.date-display')).toBeTruthy();
    expect(
      wrapper.containsAllMatchingElements([
        <h2 className="date-display-header">Please enter a year</h2>,
        <input type="number" />
      ])
    ).toBeTruthy();
  });

  it('should start with an enter the year placeholder', () => {
    expect(wrapper.state('dateOutput')).toEqual('Please enter a year');
  });
});
