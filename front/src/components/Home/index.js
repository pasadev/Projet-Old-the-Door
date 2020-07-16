import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import AdventureSmall from 'src/containers/AdventureSmall';
import Loader from 'src/components/Loader';
import Typist from 'react-typist';

import './home.scss';

const Home = ({
  adventuresHome,
  fetchAdventuresHome,
  loading,
  displayLoader,
  fetchAdventuresActiveNumber,
  adventuresActiveNumber,
}) => {
  useEffect(() => {
    fetchAdventuresHome();
    fetchAdventuresActiveNumber();
    displayLoader();
  }, []);
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <main className="home">
          <section className="presentation">
            <h1 className="presentation-title main-title">
              <Typist
                cursor={{ hideWhenDone: true }}
              >
                Bienvenue sur O'ld the door
              </Typist>
            </h1>
            <Typist
              cursor={{ show: false }}
              avgTypingDelay={20}
            >
              <pre className="asciiart">
                ___________<br />
                |  __  __  |<br />
                | |  ||  | |<br />
                | |  ||  | |<br />
                | |__||__| |<br />
                |  __  __()|<br />
                | |  ||  | |<br />
                | |  ||  | |<br />
                | |  ||  | |<br />
                | |__||__| |<br />
                |__________|<br />
              </pre>
            </Typist>
            <p className="presentation-description">
              O'ld the door est un nouveau concept d’escape game se basant sur de l’ancien.
              Retrouvez l’ambiance des jeux d’aventures textuels dans des scénarios où
              il faudra vous servir de votre environnement pour avancer.
              Trouver votre chemin dans les mots du texte de l’aventure et laissez votre
              imagination créer l'environnement qui vous entoure.
              Vous aimez jouer ? {adventuresActiveNumber} scénarios
              sont disponibles pour vous !
              Vous aimez écrire ? Découvrez notre éditeur d’aventure
              pour proposer votre histoire à tous les joueurs.
            </p>
          </section>
          <section className="latest-adventures">
            <h2 className="latest-adventures-title">
              Découvrez les dernières aventures !
            </h2>
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
  adventuresActiveNumber: PropTypes.number.isRequired,
  fetchAdventuresActiveNumber: PropTypes.func.isRequired,
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
