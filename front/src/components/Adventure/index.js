import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

import Loader from 'src/components/Loader';
import Moment from 'react-moment';
import './adventure.scss';

const Adventure = ({
  adventureSelected,
  fetchAdventureSelected,
  displayLoader,
  loading,

}) => {
  const { slug } = useParams();
  useEffect(() => {
    fetchAdventureSelected(slug);
    displayLoader();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <main className="adventure">
          <h1 className="adventure-title">{adventureSelected.title}</h1>
          <div className="adventure-authorAndDate">
            <span className="adventure-author">
              {adventureSelected.author.username}
            </span>
            <time className="adventure-date" dateTime={adventureSelected.createdAt}>
              <Moment format="DD/MM/YYYY">
                {adventureSelected.createdAt}
              </Moment>
            </time>
          </div>
          <p className="adventure-description">
            {adventureSelected.description}
          </p>
          <div className="adventure-link">
            <Link
              to={`/aventures/${slug}/jouer`}
            >
              Ouvrir le fichier
            </Link>
          </div>
        </main>
      )}
    </>
  );
};

Adventure.propTypes = {
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
};

export default Adventure;
