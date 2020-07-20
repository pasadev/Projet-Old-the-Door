import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';
import PropTypes from 'prop-types';
import AdventureSmall from 'src/components/AdventureSmall';
import Party from './Party';

import './profil.scss';

const userInfo = sessionStorage.getItem('currentuser');
const parseUserInfo = JSON.parse(userInfo);

const Profil = ({
  redirectOff,
  fetchCreatedAdventures,
  createdAdventures,
  fetchOwnParties,
  ownParties,
}) => {
  useEffect(() => {
    redirectOff();
    fetchCreatedAdventures(parseUserInfo.id);
    fetchOwnParties(parseUserInfo.id);
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
        <Typist
          cursor={{ hideWhenDone: true }}
        >
          BIENVENUE {parseUserInfo.username}
        </Typist>
      </h1>
      <div className="profil-infos">
        <h2 className="profil-littletitle">Mes informations:</h2> <br />
        <div className ="profil-user">
          nom: {parseUserInfo.lastname}<br />
          prenom: {parseUserInfo.firstname}<br />
          mail: {parseUserInfo.email}<br />
          username: {parseUserInfo.username}<br />
          role: {parseUserInfo.roles[0]} <br />
        </div>
        <h2 className="profil-littletitle">Mes Aventures:</h2><br />
        {createdAdventures.map((adventure) => (
          <AdventureSmall {...adventure} key={adventure.id} />
        ))}
        <h2 className="profil-littletitle">Mes Likes:</h2><br />
        Bonus
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
};

export default Profil;
