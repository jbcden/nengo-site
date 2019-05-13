import React, { Component } from 'react';
import { t } from 'ttag';

class Hero extends Component {
  render() {
    return (
      <div class="hero">
        <h1>{t`Nengo`}</h1>
        <h3>Converts Gregorian years into traditional Japanese years</h3>
      </div>
    );
  }
}

export default Hero;
