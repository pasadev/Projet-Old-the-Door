import React from 'react';
import PropTypes from 'prop-types';
import { FolderPlus, FolderMinus } from 'react-feather';

import './burgerMenu.scss';

const BurgerMenu = ({ toggleBurgerMenuOpen, burgerMenuOpen }) => (
  <div
    className="burgerMenuContainer"
    onClick={toggleBurgerMenuOpen}
  >
    <span className="menu">Menu</span>&nbsp; {burgerMenuOpen ? <FolderMinus /> : <FolderPlus />}
  </div>
);

BurgerMenu.propTypes = {
  burgerMenuOpen: PropTypes.bool.isRequired,
  toggleBurgerMenuOpen: PropTypes.func.isRequired,
};

export default BurgerMenu;
