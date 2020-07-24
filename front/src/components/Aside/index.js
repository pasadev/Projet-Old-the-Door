import React from 'react';
import { Info, XCircle } from 'react-feather';
import PropTypes from 'prop-types';

import './aside.scss';

const Aside = ({ toggleAsideOpen, asideOpen, data }) => (
  <aside className="aside">
    <div className="aside-icon" onClick={toggleAsideOpen}>
      {asideOpen && (<XCircle size={30} />)}
      {!asideOpen && (<Info size={30} />)}
    </div>
    {asideOpen && (
      <div className="aside-content">
        <p className="aside-content-title">
          {data.title}
        </p>
        <p className="aside-content-text">
          {data.content}
        </p>
      </div>
    )}
  </aside>
);

Aside.propTypes = {
  toggleAsideOpen: PropTypes.func.isRequired,
  asideOpen: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Aside;
