import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav className="nav">
      <ul className="nav__menu">
        <li className="nav__item">
          <Link to="/" class="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/about" class="nav__link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
