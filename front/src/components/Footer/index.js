import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './footer.scss';

const Footer = ({ toggleBurgerMenuFromNav }) => (
  <footer className="footer">
    <Link
      onClick={toggleBurgerMenuFromNav}
      className="footer-team"
      to="/equipe"
    >
      [Notre équipe]
    </Link>
    <span className="footer-copyright">&copy; 2020 - O'ld the door</span>
  </footer>
);

Footer.propTypes = {
  toggleBurgerMenuFromNav: PropTypes.func.isRequired,
};

export default Footer;
