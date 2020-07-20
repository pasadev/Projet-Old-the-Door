/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
// import Typist from 'react-typist';

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
      <h3 className="party-played-when">{createdAt}</h3>
      <div className="party-story">
        {forStory.id}
        {forStory.title}
      </div>
      <div className="party-player">{player.username}{player.id}</div>
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
