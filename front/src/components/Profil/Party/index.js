/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

// import Typist from 'react-typist'; 
import './party.scss';

const Party = ({
  time,
  createdAt,
  forStory,
  id,
  player,
}) => (
  <>
    <div className="party">
      {id}
      <h3 className="party-time">{time}</h3>
      <h3 className="party-played-when">
        <Moment format="DD/MM/YYYY" parse="YYYY-MM-DD HH:mm">
          {createdAt}
        </Moment>
      </h3>
      <div className="party-story">
        {forStory.id}
        {forStory.title}
      </div>
      <div className="party-player">{player.username}{player.id}</div>
      <div className="party-link">
      <Link
        to={`/aventures/${slugifyTitle(title)}`}
      >
        Ouvrir le fichier
      </Link>
      </div>
    </div>
  </>
);

Party.propTypes = {
  time: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  forStory: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  player: PropTypes.object.isRequired,
};

export default Party;
