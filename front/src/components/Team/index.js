/* eslint-disable max-len */
import React from 'react';
import Typist from 'react-typist';

import './team.scss';

const Team = () => (
  <main className="team">
    <h1 className="team-title main-title">
      <Typist>
        Découvrez notre merveilleuse équipe
      </Typist>
    </h1>
    <div className="member">
      <div className="member-name">
        Damien
      </div>
      <div className="member-role">
        <span>Product Owner</span>
        <span>Développeur Back</span>
      </div>
      <p className="member-description">
        Oclockien en pleine reconversion, je suis à présent mi-aventurier, mi-développeur et re-mi
        aventurier derrière.
        C'est donc avec mes quatres co-chevaliers du code que je me lance dans la quête d'énigmes.
      </p>
    </div>
    <div className="member">
      <div className="member-name">
        &nbsp;_____&nbsp;______&nbsp;&nbsp;&nbsp;________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;_______&nbsp;&nbsp;&nbsp;________&nbsp;&nbsp;&nbsp;________&nbsp;&nbsp;_______&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        |\&nbsp;&nbsp;&nbsp;_&nbsp;\&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;\|\&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;|\&nbsp;&nbsp;\&nbsp;&nbsp;/&nbsp;&nbsp;/|\&nbsp;&nbsp;___&nbsp;\&nbsp;|\&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;\|\&nbsp;&nbsp;&nbsp;____\|\&nbsp;&nbsp;___&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        \&nbsp;\&nbsp;&nbsp;\\\__\&nbsp;\&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\|\&nbsp;&nbsp;\&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\/&nbsp;&nbsp;/&nbsp;|&nbsp;\&nbsp;&nbsp;&nbsp;__/|\&nbsp;\&nbsp;&nbsp;\\&nbsp;\&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\___|\&nbsp;\&nbsp;&nbsp;&nbsp;__/|&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;\&nbsp;\&nbsp;&nbsp;\\|__|&nbsp;\&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;\&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;\&nbsp;\&nbsp;&nbsp;\_|/_\&nbsp;\&nbsp;&nbsp;\\&nbsp;\&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\_|/__&nbsp;&nbsp;
        &nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\/&nbsp;&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\_|\&nbsp;\&nbsp;\&nbsp;&nbsp;\\&nbsp;\&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\____\&nbsp;\&nbsp;&nbsp;\_|\&nbsp;\&nbsp;
        &nbsp;&nbsp;&nbsp;\&nbsp;\__\&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;\__\&nbsp;\__\&nbsp;\__\/&nbsp;&nbsp;/\&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;\_______\&nbsp;\__\\&nbsp;\__\&nbsp;\_______\&nbsp;\_______\
        &nbsp;&nbsp;&nbsp;&nbsp;\|__|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|__|\|__|\|__/__/&nbsp;/\&nbsp;__\&nbsp;&nbsp;&nbsp;&nbsp;\|_______|\|__|&nbsp;\|__|\|_______|\|_______|
      </div>
      <div className="member-role">
        <span>Lead Développeur Back</span>
      </div>
      <p className="member-description">
        hum.... Je dirais le développeur , dans la salle infos , avec le clavier!
      </p>
    </div>
    <div className="member">
      <div className="member-name">
        Tony
      </div>
      <div className="member-role">
        <span>Lead Développeur Front</span>
      </div>
      <p className="member-description">
        Moi aussi j'étais un aventurier autrefois, et puis j'ai pris une flèche dans le genou...
        Du coup j'ai décidé de devenir Développeur.
      </p>
    </div>
    <div className="member">
      <div className="member-name">
        Hugo
      </div>
      <div className="member-role">
        <span>Git Master</span>
        <span>Développeur Front</span>
      </div>
      <p className="member-description">
        la légende raconte qu'il cherche encore une phrase pour se présenter..
      </p>
    </div>
    <div className="member">
      <div className="member-name">
        Jukka
      </div>
      <div className="member-role">
        <span>Scrum Master</span>
        <span>Développeur Front</span>
      </div>
      <p className="member-description">
        J'étais en route vers Excalibourg, mais j'ai du me tromper de chemin,
        du coup je me suis installé et je suis devenu développeur.
      </p>
    </div>
  </main>
);

export default Team;
