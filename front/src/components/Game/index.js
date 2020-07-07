/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { ArrowUpCircle } from 'react-feather';

import './game.scss';

const GameScreen = ({
  buttonIsVisible,
  toggleButtonVisibility,
  currentStory,
  currentChapter,
}) => {
  React.useEffect(() => {
    console.log('componentDidMount');
  }, []);

  return (

    <main>
      <div className="pccase">
        <div className="screen oldscreeneffect">
          <div className="screentext">
            <div className="align-content">
              <div className="align-left"><p>Initializing '{currentStory.title}' v0.01 ...........................................................</p>
                <p className="optional-welcome">
                  █░█░░░█ █▀▀ █░░ █▀▀ █▀▀█ █▀▄▀█ █▀▀ ░█<br />
                  █░█▄█▄█ █▀▀ █░░ █░░ █░░█ █░▀░█ █▀▀ ░█<br />
                  █░░▀░▀░ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀▀ ▀░░░▀ ▀▀▀ ░█<br />
                  <br />{currentStory.author} &lt;certified cyborg&gt;<br />gone back in time<br />___________________________________________________________
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
              {currentChapter.content}
            </p>

          </div>

          <div onClick={toggleButtonVisibility}>click {buttonIsVisible ? <ArrowUpCircle size="99" /> : <ArrowUpCircle size="10" /> }</div>
        </div>

      </div>
    </main>

  );
};

GameScreen.propTypes = {
  // J'essaye de faire en sorte qu'un bouton apparait selon un evenement.
  // Au final ce serais avec un evenement scroll
  // Mais si j'arrivais a le faire marcher avec un bouton ce serais bien deja.
  buttonIsVisible: PropTypes.bool.isRequired,
  toggleButtonVisibility: PropTypes.func.isRequired,

  // les infos de l'aventure courant
  currentStory: PropTypes.shape({
    title: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    firstChapter: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,

  // Vu que le story est une autre table dans la bdd que le chapitre,
  // ça voudrait dire que les props soient séparés?
  // le chapitre courant.
  currentChapter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    keyword: PropTypes.string.isRequired,
    lockword: PropTypes.string.isRequired,
    unlock_text: PropTypes.string.isRequired,
    parentChapter: PropTypes.object.isRequired,
    forStory: PropTypes.object.isRequired,
  }).isRequired,
};
export default GameScreen;
