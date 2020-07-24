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
  deleteStory,
  active,
  user,
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
          <h1 className={active ? 'adventure-title main-title' : 'adventure-title main-title unactive-storyTitle'}>
            <Typist
              cursor={{ hideWhenDone: true }}
            >
              {adventureSelected.title}
            </Typist>
          </h1>
          <div className="adventure-metas">
            <span className="adventure-author">
              {adventureSelected.author.username}
            </span>
            <time className="adventure-date" dateTime={adventureSelected.createdAt}>
              <Moment format="DD/MM/YYYY" parse="YYYY-MM-DD HH:mm">
                {adventureSelected.createdAt}
              </Moment>
            </time>
            {adventureTimer.best && adventureTimer.average && (
            <>
              <div className="adventure-partyTime">
                <p>Meilleur temps: { bestHours > 0 && `${bestHours}h` }{ bestMinutes < 10 && 0 }{bestMinutes}m{ bestSeconds < 10 && 0 }{bestSeconds}s</p>
                <p>Temps moyen: { avgHours > 0 && `${avgHours}h` }{ avgMinutes < 10 && 0 }{avgMinutes}m{ avgSeconds < 10 && 0 }{avgSeconds}s</p>
                <p>Parties jouées : {adventureTimer.number}</p>
              </div>
            </>
            )}
          </div>
          <p className="adventure-description">
            {adventureSelected.description}
          </p>
          <div className="adventure-links">
            {adventureSelected.firstChapter ? <Link to={`/aventures/${slug}/jouer`}><span className="adventure-link">Jouer</span></Link>
              : <Link to="#"><span className="adventure-link-warning">L'aventure n'est pas encore jouable</span></Link>}
            {user && adventureSelected.author.id === user.id && (
              <>
                <Link
                  to={`/aventures/${slug}/edition`}
                >
                  <span className="adventure-link">Edition</span>
                </Link>
                {adventureSelected.firstChapter && (
                  <>
                    {!active && <span className="adventure-link" onClick={activateStory}>Publier</span>}
                    {active && <span className="adventure-link" onClick={desactivateStory}>Dépublier</span>}
                  </>
                )}
                <span
                  className="adventure-link delete-link"
                  id="delete-button"
                  onClick={() => {
                    document.getElementById('delete-confirmation').classList.toggle('active-delete');
                    document.getElementById('delete-button').classList.toggle('active-delete');
                  }}
                >Supprimer
                </span>
                <span className="delete-link active-delete" id="delete-confirmation">Êtes-vous sûr ?
                  <Link to="/profil"><span className="adventure-link confirmation-delete-link" onClick={deleteStory}>Oui</span></Link>
                  <span
                    className="adventure-link confirmation-delete-link"
                    onClick={() => {
                      document.getElementById('delete-confirmation').classList.toggle('active-delete');
                      document.getElementById('delete-button').classList.toggle('active-delete');
                    }}
                  >Non
                  </span>
                </span>
              </>
            )}
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
      id: PropTypes.number.isRequired,
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
    number: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  }).isRequired,
  clearAdventureTimer: PropTypes.func.isRequired,
  activateStory: PropTypes.func.isRequired,
  desactivateStory: PropTypes.func.isRequired,
  deleteStory: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
  }),
};

Adventure.defaultProps = {
  user: '',
};

export default Adventure;
