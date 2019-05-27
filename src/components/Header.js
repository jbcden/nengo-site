import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header class="header">
    <nav class="nav">
      <ul class="nav__menu">
        <li class="nav__item">
          <Link to="/" class="nav__link">
            Home
          </Link>
        </li>
        <li class="nav__item">
          <Link to="/about" class="nav__link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
