import React from 'react';
import { Info } from 'react-feather';
import PropTypes from 'prop-types';

import './aside.scss';

const Aside = ({ toggleAsideOpen, asideOpen }) => (
  <aside className="aside">
    <div className="aside-icon" onClick={toggleAsideOpen}>
      <Info size={30} />
    </div>
    {asideOpen && (
      <div className="aside-content">
        <p className="aside-content-title">
          But du jeu :
        </p>
        <p className="aside-content-text">
          Un texte s’affiche, le chapitre en cours, et il faut trouver un mot clé et un mot serrure
          qui permettent de valider la réussite du chapitre.
          Les deux doivents avoir un sens et une logique commune.
          <br />
          Exemples :
          <br />
          - clé “bâton” et serrure “cadenas”
          la logique serait d’utiliser le bâton pour casser le cadenas.
          <br />
          - clé “briquet” et serrure “bois” mettre le feu au bois.
          <br />
          - clé “loupe” et serrure “papier” regarder le papier
          avec la loupe pour y voir une inscription qui pourrait être le message de réussite.
          <br />
          La clé serait l'élément actif et serrure l'élément passif.
        </p>

      </div>
    )}
  </aside>
);

Aside.propTypes = {
  toggleAsideOpen: PropTypes.func.isRequired,
  asideOpen: PropTypes.bool.isRequired,
};

export default Aside;
