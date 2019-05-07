import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/app.scss';
import DateDisplay from './components/DateDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Nengo</h1>
        <h3>Converts Gregorian years into traditional Japanese years</h3>
        <DateDisplay />
      </div>
    );
  }
}

export default App;
