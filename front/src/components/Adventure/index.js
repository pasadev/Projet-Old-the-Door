import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

import Loader from 'src/components/Loader';
import Moment from 'react-moment';
import Typist from 'react-typist';
import './adventure.scss';

const Adventure = ({
  adventureSelected,
  fetchAdventureSelected,
  displayLoader,
  loading,
  redirectOff,
  adventureTimer,
  clearAdventureTimer,
}) => {
  const { slug } = useParams();
  useEffect(() => {
    redirectOff();
    clearAdventureTimer();
    fetchAdventureSelected(slug);
    displayLoader();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <main className="adventure">
          <p>Best Time: {adventureTimer.best}sec</p>
          <p>average Time: {adventureTimer.average}sec</p>
          <h1 className="adventure-title main-title">
            <Typist>
              {adventureSelected.title}
            </Typist>
          </h1>
          <div className="adventure-authorAndDate">
            <span className="adventure-author">
              {adventureSelected.author.username}
            </span>
            <time className="adventure-date" dateTime={adventureSelected.createdAt}>
              <Moment format="DD/MM/YYYY" parse="YYYY-MM-DD HH:mm">
                {adventureSelected.createdAt}
              </Moment>
            </time>
          </div>
          <p className="adventure-description">
            {adventureSelected.description}
          </p>
          <div className="adventure-links">
            <Link
              to={`/aventures/${slug}/jouer`}
            >
              Jouer
            </Link>
            <Link
              to={`/aventures/${slug}/edition`}
            >
              Edition
            </Link>
            <button type="button">
              Publier
            </button>
            <button type="button">
              Supprimer
            </button>
          </div>
        </main>
      )}
    </>
  );
};

Adventure.propTypes = {
  redirectOff: PropTypes.func.isRequired,
  displayLoader: PropTypes.func.isRequired,
  fetchAdventureSelected: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  // Adventure
  adventureSelected: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  // Adventure Timer
  adventureTimer: PropTypes.shape({
    best: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    average: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  }).isRequired,
  clearAdventureTimer: PropTypes.func.isRequired,
};

export default Adventure;
