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
}) => (
  <>
    <div className="party">
      <h3 className="party-story">{forStory.title}</h3>
      <h3 className="party-played-when">
        <Moment format="DD/MM/YYYY" parse="YYYY-MM-DD HH:mm">
          {createdAt}
        </Moment>
      </h3>
      <div className="party-time">
        {/* Display hours only if > 1 */}
        {Math.floor(time / 3600) > 0 && `${Math.floor(time / 3600)}h`}
        {/* Add a 0 before minutes if < 10 */}
        {Math.floor((time - ((Math.floor(time / 3600)) * 3600)) / 60) < 10 && 0}
        {/* Set minutes */}
        {Math.floor((time - ((Math.floor(time / 3600)) * 3600)) / 60)}m
        {/*  Add a 0 before seconds if < 10 */}
        {time - (((Math.floor(time / 3600)) * 3600)
        + ((Math.floor((time - ((Math.floor(time / 3600)) * 3600)) / 60)) * 60)) < 10 && 0}
        {/* Set seconds */}
        {time - (((Math.floor(time / 3600)) * 3600)
        + ((Math.floor((time - ((Math.floor(time / 3600)) * 3600)) / 60)) * 60))}s
      </div>

      {forStory.active ? (
        <div className="party-link">

          <Link
            to={`/aventures/${forStory.slug}`}
          >
            Explorer
          </Link>
        </div>
      )
        : <><p className="profil-unactiveParty">Indisponible</p></>}

    </div>
  </>
);

Party.propTypes = {
  time: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  forStory: PropTypes.object.isRequired,
};

export default Party;
