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
              {sessionStorage.getItem('isLogged') !== 'true' && (
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
              {sessionStorage.getItem('isLogged') === 'true' && (
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
              O'ld the door est un nouveau concept d???escape game se basant sur de l???ancien.
              Retrouvez l???ambiance des jeux d???aventures textuels dans des sc??narios o??
              il faudra vous servir de votre environnement pour avancer.
              Trouver votre chemin dans les mots du texte de l???aventure et laissez votre
              imagination cr??er l'environnement qui vous entoure.
              Vous aimez jouer ? <span className="home-scenario">{adventuresActiveNumber} sc??narios sont disponibles pour vous !</span> Vous aimez ??crire ? D??couvrez notre ??diteur d???aventure pour proposer votre histoire ?? tous les joueurs.
            </p>
          </section>
          <section className="home-inscription">
            <p className="home-inscription-text">
              Inscrivez-vous pour profiter des aventures cr????es par notre communaut??.
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
          <section className="latest-adventures">
            <h2 className="latest-adventures-title">
              D??couvrez les derni??res aventures !
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
