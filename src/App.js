import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/app.scss';
import DateDisplay from './components/DateDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Japanese Year Converter</h1>
        <DateDisplay />
      </div>
    );
  }
}

export default App;
