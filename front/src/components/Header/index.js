import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'src/containers/Nav';
import BurgerMenu from 'src/containers/BurgerMenu';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ toggleBurgerMenuFromNav, isLogged, logOut }) => (
  <div className="header">
    <Link
      onClick={toggleBurgerMenuFromNav}
      className="nav-logo"
      to="/"
    >
      O'ld the door
    </Link>
    { (isLogged === null) && (
    <Link
      onClick={toggleBurgerMenuFromNav}
      className="login"
      to="/connexion"
    >
      Login
    </Link>

    )}
    { (isLogged !== null) && (
      <button className="logout" type="button" onClick={logOut}>
        logout
      </button>
    )}

    <div className="nav-container">
      <Nav />
    </div>
    <BurgerMenu />
  </div>
);

Header.propTypes = {
  toggleBurgerMenuFromNav: PropTypes.func.isRequired,
  isLogged: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  logOut: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isLogged: null,
};

export default Header;
