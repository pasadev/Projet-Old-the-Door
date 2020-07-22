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
  fetchOwnParties,
  ownParties,
  userInfo,
}) => {
  useEffect(() => {
    redirectOff();
    fetchCreatedAdventures(userInfo.id);
    fetchOwnParties(userInfo.id);
  }, []);
  return (
    <main className="profil">
      <h1 className="team-title main-title">
        <Typist
          cursor={{ hideWhenDone: true }}
        >
          Mon profil
        </Typist>
      </h1>
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
      <h1 className="profil-title">
          BIENVENUE {userInfo.username}
        <
      </h1>
      <div className="profil-infos">
        <h2 className="profil-littletitle">Mes informations:</h2> <br />
        <div className="profil-user">
          nom: {userInfo.lastname}<br />
          prenom: {userInfo.firstname}<br />
          mail: {userInfo.email}<br />
          username: {userInfo.username}<br />
          role: {userInfo.roles[0]} <br />
        </div>
        <h2 className="profil-littletitle">Mes Aventures:</h2><br />
        {createdAdventures.map((adventure) => (
          <AdventureSmall {...adventure} key={adventure.id} />
        ))}
        <h2 className="profil-littletitle">Historique d'aventure:</h2><br />
        <div className="profil-story">
          {ownParties.map((ownParty) => (
            <Party {...ownParty} key={ownParty.id} />

          ))}
        </div>
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

  fetchOwnParties: PropTypes.func.isRequired,
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
};

export default Profil;
