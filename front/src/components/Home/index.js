import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import AdventureSmall from 'src/containers/AdventureSmall';

import './home.scss';

const Home = ({ adventuresHome, fetchAdventuresHome }) => {
  useEffect(() => {
    fetchAdventuresHome();
  }, []);
  return (
    <main className="home">
      <section className="presentation">
        <h1 className="presentation-title">
          Bienvenue sur le site d'aventures O'ld the door
        </h1>
        <span className="spacer">--------------------------------------</span>
        <p className="asciiart" />
        <p className="presentation-description">
          Un texte de présentation qui claque !! Lorem ipsum dolor sit, amet consectetur adipisicing
          Quam unde aspernatur distinctio quae voluptatem id ipsa adipisci, provident ipsum officia
          eius itaque quibusdam architecto nam facilis impedit, perferendis laborum ullam?
        </p>
        <span className="spacer">--------------------------------------</span>
      </section>
      <section className="latest-adventures">
        <h2 className="latest-adventures-title">
          Découvrez les dernières aventures crées par les joueurs !
        </h2>
        <span className="spacer">--------------------------------------</span>
        <div className="adventureSmall-container">
          {adventuresHome.map((adventure) => (
            <AdventureSmall {...adventure} key={adventure.id} />
          ))}
        </div>
      </section>
    </main>
  );
};

Home.propTypes = {
  adventuresHome: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  fetchAdventuresHome: PropTypes.func.isRequired,
};

export default Home;
