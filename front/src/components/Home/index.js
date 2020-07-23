import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
  isLogged,
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
            <div className="ascii-container">
              {isLogged !== 'true' && (
                <Typist
                  cursor={{ show: false }}
                  avgTypingDelay={5}
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
              )}
              {isLogged === 'true' && (
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
              )}
            </div>

            <p className="presentation-description">
              O'ld the door est un nouveau concept d’escape game se basant sur du old school.
              Retrouvez l’ambiance des jeux d’aventures textuels dans des scénarios où il faudra vous servir de votre environnement pour avancer.
              Trouver votre chemin dans les mots du texte de l’aventure et laissez votre
              imagination créer l'environnement qui vous entoure.
              Vous aimez jouer ? <span className="home-scenario">{adventuresActiveNumber} scénarios sont disponibles pour vous !</span> Vous aimez écrire ? Découvrez notre éditeur d’aventure pour proposer votre histoire à tous les joueurs.
            </p>
          </section>
          {isLogged !== true && (
            <section className="home-inscription">
              <p className="home-inscription-text">
                Inscrivez-vous pour profiter des aventures créées par notre communauté.
              </p>
              <div className="home-links">
                <Link
                  className="link-inscription"
                  to="/inscription"
                >
                  Inscription
                </Link>
                <Link
                  className="link-adventures"
                  to="/aventures"
                >
                  Aventures
                </Link>
              </div>
            </section>
          )}
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
  isLogged: PropTypes.oneOfType([
    PropTypes.bool,
  ]),
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

Home.defaultProps = {
  isLogged: null,
};

export default Home;
