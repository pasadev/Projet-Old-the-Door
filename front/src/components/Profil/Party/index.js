/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

// import Typist from 'react-typist';
import './party.scss';

const Party = ({
  time,
  createdAt,
  forStory,
  player,
}) => (
  <>
    <div className="party">
      <h3 className="party-story">{forStory.title}</h3>
      <h3 className="party-played-when">
        <Moment format="DD/MM/YYYY" parse="YYYY-MM-DD HH:mm">
          {createdAt}
        </Moment>
      </h3>
      <div className="party-player">{player.username}</div>
      <div className="party-time">
        {time} seconds
      </div>
      <div className="party-link">
        <Link
          to={`/aventures/${forStory.slug}`}
        >
          Ouvrir le fichier
        </Link>
      </div>
    </div>
  </>
);

Party.propTypes = {
  slug: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  forStory: PropTypes.object.isRequired,
  player: PropTypes.object.isRequired,
};

export default Party;
