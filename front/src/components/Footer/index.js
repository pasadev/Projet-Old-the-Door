import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <Link className="footer-team" to="/equipe">
      Notre équipe
    </Link>
    <span className="footer-copyright">&copy; 2020 - O'ld the door</span>
  </footer>
);
export default Footer;
