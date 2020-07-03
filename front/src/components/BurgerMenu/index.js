import React from 'react';
import PropTypes from 'prop-types';
import { FolderPlus, FolderMinus } from 'react-feather';

import Nav from 'src/components/Nav';

import './burgerMenu.scss';

const BurgerMenu = ({ toggleBurgerMenuOpen, burgerMenuOpen }) => {
  const cssClass = burgerMenuOpen ? 'burgerMenu-button' : 'burgerMenu-button burgerMenu-button--closed';
  return (
    <div className="burgerMenuContainer">
      <div className={cssClass} onClick={toggleBurgerMenuOpen}>
        {burgerMenuOpen ? <FolderMinus /> : <FolderPlus />}
      </div>
      {burgerMenuOpen && <Nav />}
    </div>
  );
};

BurgerMenu.propTypes = {
  burgerMenuOpen: PropTypes.bool.isRequired,
  toggleBurgerMenuOpen: PropTypes.func.isRequired,
};

export default BurgerMenu;
