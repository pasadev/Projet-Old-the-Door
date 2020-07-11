import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'src/containers/Nav';
import BurgerMenu from 'src/containers/BurgerMenu';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ toggleBurgerMenuFromNav }) => (
  <div className="header">
    <Link
      onClick={toggleBurgerMenuFromNav}
      className="nav-logo"
      to="/"
    >
      O'ld the door
    </Link>
    <Link
      onClick={toggleBurgerMenuFromNav}
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

Header.propTypes = {
  toggleBurgerMenuFromNav: PropTypes.func.isRequired,
};

export default Header;
