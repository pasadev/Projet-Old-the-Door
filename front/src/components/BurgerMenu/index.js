import React from 'react';
import PropTypes from 'prop-types';
import { FolderPlus, FolderMinus } from 'react-feather';

import './burgerMenu.scss';

const BurgerMenu = ({ toggleBurgerMenuOpen, burgerMenuOpen }) => (
  <div
    className="burgerMenuContainer"
    onClick={toggleBurgerMenuOpen}
  >
    {burgerMenuOpen ? <FolderMinus className="burgerMenu-button" /> : <FolderPlus className="burgerMenu-button" />}
  </div>
);

BurgerMenu.propTypes = {
  burgerMenuOpen: PropTypes.bool.isRequired,
  toggleBurgerMenuOpen: PropTypes.func.isRequired,
};

export default BurgerMenu;
