import React from 'react';

import './pageError404.scss';

const PageError404 = () => (
  <div className="error404-container">
    <h1 className="error404-title">
      Erreur 404
    </h1>
    <span className="error404-disclaimer">Ne pas prendre au sérieux le texte suivant</span>
    <p className="error404-text">
      <div className="error404-texts">Un problème a été détecté et le site ne trouve pas cette page.</div>

      <div className="error404-texts">Le problème semble être causé par une mauvaise route.</div>

      <div className="error404-texts">
        Si vous voyez cette page d'erreur pour la première fois, retourner sur la page précédente
        ou toutes autres pages qui fonctionnaient jusqu'à présent.
      </div>

      <div className="error404-texts">
        Si ce n'est pas la première fois que vous voyez cette page d'erreur
        c'est que vous essayez de casser notre site et ce n'est pas très gentil !
      </div>

      <div className="error404-texts">
        Si vous n'êtes pas un vilain hacker et que vous êtes sûr que l'adresse de la page souhaitée
        est bonne merci de nous contacter si nous avons mis en place une méthode de contact...
      </div>

      <div className="error404-texts">
        <span className="error404-span">Information techniques (totalement fausses):</span>
        *** STOP: XDF1235CDSN DJHMEDK516DAF
        \\ FCLX78MVLx0000000000FABIGEON54547FHSFM
      </div>
    </p>
  </div>
);

export default PageError404;
