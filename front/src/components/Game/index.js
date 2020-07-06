/* eslint-disable max-len */
import React from 'react';

import './game.scss';

const GameScreen = () => (

  <main>
    <div className="pccase">
      <div className="screen oldscreeneffect">
        <div className="screentext">
          <div className="align-content">
            <div className="align-left"><p>Initializing 'O'ld the door' v0.01 ...........................................................</p>
              <p className="optional-welcome">
                █░█░░░█ █▀▀ █░░ █▀▀ █▀▀█ █▀▄▀█ █▀▀ ░█<br />
                █░█▄█▄█ █▀▀ █░░ █░░ █░░█ █░▀░█ █▀▀ ░█<br />
                █░░▀░▀░ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀▀ ▀░░░▀ ▀▀▀ ░█<br />
                <br />Damien Toscano &lt;certified cyborg&gt;<br />gone back in time<br />___________________________________________________________
              </p>
            </div>
            <div className="game-timer align-right">15:05</div>
          </div>

          <form>
            <div>
              <label htmlFor="game-key"> Déclencheur</label> <br />
              <input name="game-key" id="game-key" placeholder="key" className="screentext" />
            </div>
            <div>
              <label htmlFor="game-lock"> Support</label> <br />
              <input name="game-lock" id="game-lock" placeholder="lock" className="screentext" />
            </div>
          </form>
          <p className="game-text">
            N’empêche que tout le monde parle de moi! C’est quand même un signe! Allez-y mollo avec la joie! Ah ah Sire! Je vous attends! À moins que vous préfériez qu’on dise partout que le roi est une petite pédale qui pisse dans son froc à l’idée d’se battre!<br />

            Léodagan et moi on fait semblant de vous prendre en otage. Ah ah Sire! Je vous attends! À moins que vous préfériez qu’on dise partout que le roi est une petite pédale qui pisse dans son froc à l’idée d’se battre! Perceval le Galois en tout cas tout le monde s’accorde à dire que c’est une tanche et ça c’est pas une légende! Oh ben ça va on plaisante! Sire, mon père était peut-être unijambiste mais, moi, ma femme a pas de moustache!<br />

            Non mais maintenant il faut se tirer dans l'autre sens. Ben je suis pas mystérieux moi! J’suis même pas solitaire.<br />
          </p>

        </div>
      </div>

    </div>
    <div>ici un bouton pour remonter en haut de la page</div>
  </main>

);
export default GameScreen;

// pour récuperer les données par props
