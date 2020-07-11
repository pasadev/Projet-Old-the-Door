import React from 'react';
import { Link } from 'react-router-dom';

import './profil.scss';

const Profil = () => (
  <main className="profil">
    <Link
      to="/aventures/creation"
    >
      Créer une Aventure
    </Link>
    <div className="profil-infos">
      Mon profil, nom, mail etc
    </div>
  </main>
);

export default Profil;
