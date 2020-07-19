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
  activateStory,
  desactivateStory,
}) => {
  const { slug } = useParams();
  useEffect(() => {
    redirectOff();
    clearAdventureTimer();
    fetchAdventureSelected(slug);
    displayLoader();
  }, []);
  // Average time calculation
  const avgHours = Math.floor(adventureTimer.average / 3600);
  const avgMinutes = Math.floor((adventureTimer.average - (avgHours * 3600)) / 60);
  const avgSeconds = adventureTimer.average - ((avgHours * 3600) + (avgMinutes * 60));
  // Best time calculation
  const bestHours = Math.floor(adventureTimer.best / 3600);
  const bestMinutes = Math.floor((adventureTimer.best - (bestHours * 3600)) / 60);
  const bestSeconds = adventureTimer.best - ((bestHours * 3600) + (bestMinutes * 60));

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <main className="adventure">
          <h1 className={adventureSelected.active ? 'adventure-title main-title' : 'adventure-title main-title unactive-storyTitle'}>
            <Typist
              cursor={{ hideWhenDone: true }}
            >
              {adventureSelected.title}
            </Typist>
          </h1>
          <div className="adventure-metas">
            <span className="adventure-author">
              Ecrit par {adventureSelected.author.username}
            </span>
            <time className="adventure-date" dateTime={adventureSelected.createdAt}>
              <Moment format="DD/MM/YYYY" parse="YYYY-MM-DD HH:mm">
                {adventureSelected.createdAt}
              </Moment>
            </time>
            {adventureTimer.best && adventureTimer.average && (
            <>
              <p>Meilleur temps: { bestHours > 0 && `${bestHours}h` }{ bestMinutes < 10 && 0 }{bestMinutes}m{ bestSeconds < 10 && 0 }{bestSeconds}s</p>
              <p>Temps moyen: { avgHours > 0 && `${avgHours}h` }{ avgMinutes < 10 && 0 }{avgMinutes}m{ avgSeconds < 10 && 0 }{avgSeconds}s</p>
            </>
            )}
          </div>
          <p className="adventure-description">
            {adventureSelected.description}
          </p>
          <div className="adventure-links">
            {adventureSelected.firstChapter ? <Link to={`/aventures/${slug}/jouer`}><span className="adventure-link">Jouer</span></Link>
              : <Link to="#"><span className="adventure-link-warning">L'aventure n'est pas encore prête</span></Link>}

            <Link
              to={`/aventures/${slug}/edition`}
            >
              <span className="adventure-link">Edition</span>
            </Link>
            {!adventureSelected.active && <span className="adventure-link publish-link" onClick={activateStory}>Publier</span>}
            {adventureSelected.active && <span className="adventure-link unpublish-link" onClick={desactivateStory}>Dépublier</span>}
            <span className="adventure-link delete-link">Supprimer</span>
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
    active: PropTypes.bool,
    author: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
    createdAt: PropTypes.string.isRequired,
    firstChapter: PropTypes.object,
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
  activateStory: PropTypes.func.isRequired,
  desactivateStory: PropTypes.func.isRequired,
};

export default Adventure;
