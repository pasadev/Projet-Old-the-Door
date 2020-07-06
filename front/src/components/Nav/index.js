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
      Home
    </NavLink>
    <NavLink
      onClick={toggleBurgerMenuFromNav}
      className="nav-item"
      to="/aventures"
      activeClassName="nav-item"
      exact
    >
      Aventures
    </NavLink>
    <NavLink
      onClick={toggleBurgerMenuFromNav}
      className="nav-item"
      to="/profil"
      activeClassName="nav-item"
      exact
    >
      Mon Profil
    </NavLink>
  </nav>
);

Nav.propTypes = {
  toggleBurgerMenuFromNav: PropTypes.func.isRequired,
};

export default Nav;
