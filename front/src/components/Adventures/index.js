import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import AdventureSmall from 'src/components/AdventureSmall';

import './adventures.scss';

const Adventures = ({ adventuresCatalog, fetchAdventuresCatalog }) => {
  useEffect(() => {
    fetchAdventuresCatalog();
    // console.log('Fetch catalog');
  }, []);
  return (
    <main className="adventures">
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
    </main>
  );
};

Adventures.propTypes = {
  adventuresCatalog: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  fetchAdventuresCatalog: PropTypes.func.isRequired,
};

export default Adventures;
