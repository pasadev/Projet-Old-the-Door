import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AdventureSmall from 'src/components/AdventureSmall';
import Loader from 'src/components/Loader';
import Typist from 'react-typist';

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
          <h1 className="adventures-title main-title">
            <Typist
              cursor={{ hideWhenDone: true }}
            >
              Les aventures
            </Typist>
          </h1>
          <div className="adventures-container">
            <div className="adventureSmall-container">
              <div className="adventureSmall creationAdventure">
                <h3 className="adventureSmall-title">
                  Pour créer une aventure c'est par ici.
                </h3>
                <div className="adventureSmall-link">
                  <Link
                    to="/aventures/creation"
                  >
                    Créer une Aventure
                  </Link>
                </div>
              </div>
              <h2 className="main-title">Catalogue</h2>
              {adventuresCatalog.map((adventure) => (
                <AdventureSmall {...adventure} key={adventure.id} />
              ))}
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
