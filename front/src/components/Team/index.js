/* eslint-disable max-len */
import React from 'react';
import Typist from 'react-typist';

import './team.scss';

const Team = () => (
  <main className="team">
    <h1 className="team-title main-title">
      <Typist
        cursor={{ hideWhenDone: true }}
      >
        Découvrez notre merveilleuse équipe
      </Typist>
    </h1>
    <div className="member">
      <div className="member-name">
        <pre>
        &nbsp;________  ________  _____ ______   ___  _______   ________      <br />
          |\   ___ \|\   __  \|\   _ \  _   \|\  \|\  ___ \ |\   ___  \     <br />
          \ \  \_|\ \ \  \|\  \ \  \\\__\ \  \ \  \ \   __/|\ \  \\ \  \    <br />
        &nbsp;\ \  \ \\ \ \   __  \ \  \\|__| \  \ \  \ \  \_|/_\ \  \\ \  \   <br />
        &nbsp;&nbsp;\ \  \_\\ \ \  \ \  \ \  \    \ \  \ \  \ \  \_|\ \ \  \\ \  \  <br />
        &nbsp;&nbsp;&nbsp;\ \_______\ \__\ \__\ \__\    \ \__\ \__\ \_______\ \__\\ \__\ <br />
        &nbsp;&nbsp;&nbsp;&nbsp;\|_______|\|__|\|__|\|__|     \|__|\|__|\|_______|\|__| \|__| <br />
        </pre>
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
        <pre>
          &nbsp;&nbsp;_____ ______   ________     ___    ___ _______   ________   ________  _______      <br />
          &nbsp;|\   _ \  _   \|\   __  \   |\  \  /  /|\  ___ \ |\   ___  \|\   ____\|\  ___ \     <br />
          &nbsp;\ \  \\\__\ \  \ \  \|\  \  \ \  \/  / | \   __/|\ \  \\ \  \ \  \___|\ \   __/|    <br />
          &nbsp;&nbsp;\ \  \\|__| \  \ \   __  \  \ \    / / \ \  \_|/_\ \  \\ \  \ \  \    \ \  \_|/__  <br />
          &nbsp;&nbsp;&nbsp;\ \  \    \ \  \ \  \ \  \  /     \/   \ \  \_|\ \ \  \\ \  \ \  \____\ \  \_|\ \ <br />
          &nbsp;&nbsp;&nbsp;&nbsp;\ \__\    \ \__\ \__\ \__\/  /\   \    \ \_______\ \__\\ \__\ \_______\ \_______\<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|__|     \|__|\|__|\|__/__/ /\ __\    \|_______|\|__| \|__|\|_______|\|_______|<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__|/ \|__|
        </pre>
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
        <pre>
          &nbsp;_________  ________  ________       ___    ___ <br />
          |\___   ___\\   __  \|\   ___  \    |\  \  /  /|<br />
          \|___ \  \_\ \  \|\  \ \  \\ \  \   \ \  \/  / /<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\ \  \ \ \  \\\  \ \  \\ \  \   \ \    / / <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\ \  \ \ \  \\\  \ \  \\ \  \   \/  /  /  <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\ \__\ \ \_______\ \__\\ \__\__/  / /    <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|__|  \|_______|\|__| \|__|\___/ /     <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|___|/      <br />
        </pre>
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
        <pre>
         &nbsp;___  ___  ___  ___  ________  ________     <br />
          |\  \|\  \|\  \|\  \|\   ____\|\   __  \    <br />
          \ \  \\\  \ \  \\\  \ \  \___|\ \  \|\  \   <br />
         &nbsp;\ \   __  \ \  \\\  \ \  \  __\ \  \\\  \  <br />
         &nbsp;&nbsp;\ \  \ \  \ \  \\\  \ \  \|\  \ \  \\\  \ <br />
         &nbsp;&nbsp;&nbsp;\ \__\ \__\ \_______\ \_______\ \_______\<br />
         &nbsp;&nbsp;&nbsp;&nbsp;\|__|\|__|\|_______|\|_______|\|_______|<br />

        </pre>
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
        <pre>
          &nbsp;&nbsp;&nbsp;&nbsp;___  ___  ___  ___  __    ___  __    ________     <br />
          &nbsp;&nbsp;&nbsp;|\  \|\  \|\  \|\  \|\  \ |\  \|\  \ |\   __  \    <br />
          &nbsp;&nbsp;&nbsp;\ \  \ \  \\\  \ \  \/  /|\ \  \/  /|\ \  \|\  \   <br />
          &nbsp;__ \ \  \ \  \\\  \ \   ___  \ \   ___  \ \   __  \  <br />
          |\  \\_\  \ \  \\\  \ \  \\ \  \ \  \\ \  \ \  \ \  \ <br />
          \ \________\ \_______\ \__\\ \__\ \__\\ \__\ \__\ \__\<br />
          &nbsp;\|________|\|_______|\|__| \|__|\|__| \|__|\|__|\|__|<br />
        </pre>
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
