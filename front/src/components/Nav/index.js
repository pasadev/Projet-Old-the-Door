import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './nav.scss';

const Nav = ({ toggleBurgerMenuFromNav, isLogged }) => (
  <nav className="nav">
    <Link
      className="nav-item"
      to="/"
      onClick={toggleBurgerMenuFromNav}
    >
      <span className="nav-symbol">{'>:/'}</span>[Home]
    </Link>
    <Link
      onClick={toggleBurgerMenuFromNav}
      className="nav-item"
      to="/aventures"
    >
      <span className="nav-symbol">{'>:/'}</span>[Aventures]
    </Link>

    {(isLogged !== null) && (
    <Link
      onClick={toggleBurgerMenuFromNav}
      className="nav-item"
      to="/profil"
    >
      <span className="nav-symbol">{'>:/'}</span>[Profil]
    </Link>
    )}
  </nav>
);

Nav.propTypes = {
  toggleBurgerMenuFromNav: PropTypes.func.isRequired,
  isLogged: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
};

Nav.defaultProps = {
  isLogged: null,
};

export default Nav;
