import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './nav.scss';

const Nav = ({ toggleBurgerMenuFromNav }) => (
  <nav className="nav">
    <NavLink
      className="nav-item"
      to="/"
      activeClassName="nav-item-active"
      exact
      onClick={toggleBurgerMenuFromNav}
    >
      <span className="nav-symbol">{'>:/'}</span>Home
    </NavLink>
    <NavLink
      onClick={toggleBurgerMenuFromNav}
      className="nav-item"
      to="/aventures"
      activeClassName="nav-item"
      exact
    >
      <span className="nav-symbol">{'>:/'}</span>Aventures
    </NavLink>
    <NavLink
      onClick={toggleBurgerMenuFromNav}
      className="nav-item"
      to="/profil"
      activeClassName="nav-item"
      exact
    >
      <span className="nav-symbol">{'>:/'}</span>Mon Profil
    </NavLink>
  </nav>
);

Nav.propTypes = {
  toggleBurgerMenuFromNav: PropTypes.func.isRequired,
};

export default Nav;
