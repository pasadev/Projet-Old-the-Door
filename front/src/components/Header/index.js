import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'src/containers/Nav';
import BurgerMenu from 'src/containers/BurgerMenu';

import './header.scss';

const Header = () => (
  <div className="header">
    <Link
      className="nav-logo"
      to="/"
    >
      O'ld the door
    </Link>
    <Link
      className="login"
      to="/connexion"
    >
      Login
    </Link>
    <div className="nav-container">
      <Nav />
    </div>
    <BurgerMenu />
  </div>
);

export default Header;
