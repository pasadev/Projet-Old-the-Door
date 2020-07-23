import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';
import PropTypes from 'prop-types';
import AdventureSmall from 'src/components/AdventureSmall';
import Party from './Party';

import './profil.scss';

const Profil = ({
  redirectOff,
  fetchCreatedAdventures,
  createdAdventures,

  ownParties,
  userInfo,
  displayLoader,
}) => {
  useEffect(() => {
    redirectOff();
    displayLoader();
    fetchCreatedAdventures(userInfo.id);
  }, []);
  return (
    <main className="profil">
      <h1 className="team-title main-title">
        <Typist
          cursor={{ hideWhenDone: true }}
        >
          Profil de {userInfo.username}
        </Typist>
      </h1>
      <h2 className="profil-littletitle">Mes informations:</h2>
      <div className="profil-user">
        <p>Nom: {userInfo.lastname}</p>
        <p>Prénom: {userInfo.firstname}</p>
        <p>Email: {userInfo.email}</p>
        <p>Username: {userInfo.username}</p>
      </div>
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
      <h2 className="profil-littletitle">Mes Aventures créées:</h2>
      {createdAdventures.map((adventure) => (
        <AdventureSmall {...adventure} key={adventure.id} />
      ))}
      <h2 className="profil-littletitle">Mes parties jouées:</h2>
      <div className="profil-story">
        {ownParties.map((ownParty) => (
          <Party {...ownParty} key={ownParty.id} />

        ))}
      </div>
    </main>
  );
};

Profil.propTypes = {
  redirectOff: PropTypes.func.isRequired,
  fetchCreatedAdventures: PropTypes.func.isRequired,
  createdAdventures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,

  ownParties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      time: PropTypes.number.isRequired,
      forStory: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
      createdAt: PropTypes.string.isRequired,
      player: PropTypes.object,
    }).isRequired,
  ).isRequired,
  userInfo: PropTypes.object.isRequired,
  displayLoader: PropTypes.func.isRequired,
};

export default Profil;
