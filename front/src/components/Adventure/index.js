import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import Moment from 'react-moment';
import { Link, useParams } from 'react-router-dom';

import { getAdventureBySlug } from 'src/utils';

const Adventure = ({ adventuresCatalog, fetchAdventuresCatalog }) => {
  useEffect(() => {
    fetchAdventuresCatalog();
    console.log('Fetch Adventure');
    console.log(adventure);
    console.log(adventure);
  }, []);
  const { slug } = useParams();
  const adventure = getAdventureBySlug(adventuresCatalog, slug);
  console.log(adventuresCatalog);
  // console.log(slug);
  // console.log(adventure.author);
  console.log(adventure);

  return (
    <main className="adventure-container">
      <h1 className="adventure-title">rer</h1>
      <div className="adventure-authorAndDate">
        <span>
          Author
        </span>
        {/* <time className="adventure-date" dateTime={}>
          <Moment format="DD/MM/YYYY">
            {}
          </Moment>
        </time> */}
      </div>
      <p className="adventure-description">
        lorem ipsum
      </p>
      {/* <Link
        to={`/aventures/:slug/jouer`}
      >
        Ouvrir le fichier
      </Link> */}
    </main>
  );
};

Adventure.propTypes = {
  adventuresCatalog: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  fetchAdventuresCatalog: PropTypes.func.isRequired,
};

export default Adventure;
