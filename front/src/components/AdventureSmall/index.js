import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './adventureSmall.scss';

const AdventureSmall = ({
  title,
  synopsis,
  author,
  createdAt,
  slug,
}) => (
  <div className="adventureSmall">
    <h3 className="adventureSmall-title">
      {title}
    </h3>
    <div className="adventureSmall-authorAndDate">
      <span className="adventureSmall-author">
        {author.username}
      </span>
      <time className="adventureSmall-date" dateTime={createdAt}>
        <Moment format="DD/MM/YYYY" parse="YYYY-MM-DD HH:mm">
          {createdAt}
        </Moment>
      </time>
    </div>
    <p className="adventureSmall-synopsis">
      {synopsis}
    </p>
    <div className="adventureSmall-link">
      <Link
        to={`/aventures/${slug}`}
      >
        Explorer
      </Link>
    </div>
  </div>
);

AdventureSmall.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  author: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default AdventureSmall;
