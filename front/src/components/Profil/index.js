import React from 'react';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';

import './profil.scss';

const Profil = () => (
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
    <div className="profil-infos">
      Mon profil, nom, mail etc
    </div>
  </main>
);

export default Profil;
