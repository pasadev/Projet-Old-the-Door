import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';
import PropTypes from 'prop-types';

import './profil.scss';

const userInfo = sessionStorage.getItem('currentuser');
const parseUserInfo = JSON.parse(userInfo);

const Profil = ({
  redirectOff,
  fetchCreatedAdventures,
}) => {
  useEffect(() => {
    redirectOff();
    console.log(parseUserInfo.id);
    fetchCreatedAdventures(parseUserInfo.id);
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
        nom: {parseUserInfo.lastname}<br />
        prenom: {parseUserInfo.firstname}<br />
        mail: {parseUserInfo.email}<br />
        username: {parseUserInfo.username}<br />
        role: {parseUserInfo.roles[0]} <br />
        <h2 className="profil-littletitle">Mes Aventures:</h2><br />
        <h2 className="profil-littletitle">Mes Likes:</h2><br />
        <h2 className="profil-littletitle">Historique d'aventure:</h2><br />
        {/* <div className="adventureSmall">
       <h3 className="adventureSmall-title">
          {title}
        </h3>
         <div className="adventureSmall-authorAndDate">
          <span className="adventureSmall-author">
            {author.username}
          </span>
          <time className="adventureSmall-date" dateTime={createdAt}>
            <Moment format="DD/MM/YYYY" parse="YYYY-MM-DD HH:mm">
              {createdAt}
            </Moment>
          </time>
        </div>
        <p className="adventureSmall-synopsis">
          {synopsis}
        </p>
        <div className="adventureSmall-link">
          <Link
            to={`/aventures/${slugifyTitle(title)}`}
          >
            Ouvrir le fichier
          </Link>
        </div>
      </div> */}
      </div>
    </main>
  );
};

Profil.propTypes = {
  redirectOff: PropTypes.func.isRequired,
  fetchCreatedAdventures: PropTypes.func.isRequired,
};

export default Profil;
