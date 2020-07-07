import React from 'react';
import PropTypes from 'prop-types';

import './adventureSmall.scss';

const AdventureSmall = ({
  title,
  synopsis,
}) => (
  <div className="adventureSmall">
    <h3 className="adventureSmall-title">
      {title}
    </h3>
    <p className="adventureSmall-synopsis">
      {synopsis}
    </p>
    <link // or a button?
      className="adventureSmall-link"
      rel=""
      href="#"
    />
  </div>
);

AdventureSmall.propTypes = {
  title: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
};

export default AdventureSmall;
