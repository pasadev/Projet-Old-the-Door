import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import AdventureSmall from 'src/containers/AdventureSmall';
import Loader from 'src/components/Loader';

import './home.scss';

const Home = ({
  adventuresHome,
  fetchAdventuresHome,
  loading,
  displayLoader,
}) => {
  useEffect(() => {
    fetchAdventuresHome();
    displayLoader();
  }, []);
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <main className="home">
          <section className="presentation">
            <h1 className="presentation-title">
              Bienvenue sur le site d'aventures O'ld the door
            </h1>
            <span className="spacer">--------------------------------------</span>
            <p className="asciiart" />
            <p className="presentation-description">
              Ol’d the door est un nouveau concept d’escape game se basant sur de l’ancien.
              Retrouvez l’ambiance des jeux d’aventures textuels dans des scénarios où
              il faudra vous servir de votre environnement pour avancer.
              Trouver votre chemin dans les mots du texte de l’aventure et laissez votre
              imagination créer l'environnement qui vous entoure.
              Vous aimez jouer ? De nombreux
              (On pourrait même afficher le nombre de scénarios dispo ?) scénarios
              sont disponibles pour vous !
              Vous aimez écrire ? Découvrez notre éditeur d’aventure
              pour proposer votre histoire à tous les joueurs.
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
      )}
    </>
  );
};

Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  adventuresHome: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  fetchAdventuresHome: PropTypes.func.isRequired,
  displayLoader: PropTypes.func.isRequired,
};

export default Home;
