import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AdventureSmall from 'src/components/AdventureSmall';
import Loader from 'src/components/Loader';

import './adventures.scss';

const Adventures = ({
  adventuresCatalog,
  fetchAdventuresCatalog,
  loading,
  displayLoader,
}) => {
  useEffect(() => {
    fetchAdventuresCatalog();
    displayLoader();
  }, []);
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <main className="adventures">
          <div className="adventures-create">
            <h1 className="adventures-title">
              Pour créer une aventure c'est par ici.
            </h1>
            <div className="adventures-create-link">
              <Link
                to="/aventures/creation"
              >
                Créer une Aventure
              </Link>
            </div>
            <span className="spacer">--------------------------------------</span>
          </div>
          <div className="adventures-catalog">
            <h1 className="adventures-title">
              Voici toutes les aventures de notre catalogue
            </h1>
            <span className="spacer">--------------------------------------</span>
            <div className="adventures-container">
              <div className="adventureSmall-container">
                {adventuresCatalog.map((adventure) => (
                  <AdventureSmall {...adventure} key={adventure.id} />
                ))}
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

Adventures.propTypes = {
  adventuresCatalog: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  fetchAdventuresCatalog: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  displayLoader: PropTypes.func.isRequired,
};

export default Adventures;
