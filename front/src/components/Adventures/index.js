import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

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
          <Typist>
            Les aventures
          </Typist>
          </h1>
          <div className="adventures-container">
            <div className="adventureSmall-container">
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
