import React, { Component } from 'react';
import './styles/app.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import DateDisplay from './components/DateDisplay';

class App extends Component {
  render() {
    return (
      <div class="container">
        <Header />
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
