import React, { Component } from 'react';
import './styles/app.scss';
import Hero from './components/Hero';
import DateDisplay from './components/DateDisplay';

class App extends Component {
  render() {
    return (
      <div class="container">
        <header class="header" />
        <main class="main">
          <Hero />
          <DateDisplay />
        </main>
        <footer class="footer" />
      </div>
    );
  }
}

export default App;
