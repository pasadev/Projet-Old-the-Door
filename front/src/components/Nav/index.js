import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.scss';

const Nav = () => (
  <nav className="nav">
    <NavLink
      className="nav-item"
      to="/"
      activeClassName="nav-item"
      exact
    >
      O'ld the door
    </NavLink>
    <NavLink
      className="nav-item"
      to="/"
      activeClassName="nav-item-active"
      exact
    >
      Home
    </NavLink>
    <NavLink
      className="nav-item"
      to="/aventures"
      activeClassName="nav-item"
      exact
    >
      Aventures
    </NavLink>
    <NavLink
      className="nav-item"
      to="/profil"
      activeClassName="nav-item"
      exact
    >
      Mon Profil
    </NavLink>
  </nav>
);

export default Nav;
