/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { ArrowUpCircle } from 'react-feather';

import './game.scss';

const GameScreen = ({
  // buttonIsVisible,
  // toggleButtonVisibility,
  currentStory,
  fetchCurrentStory,
  // currentChapter,
}) => {
  React.useEffect(() => {
    console.log('componentDidMount');
    fetchCurrentStory();
    console.log(currentStory);
  }, []);

  return (

    <main>
      <div className="pccase">
        <div className="screen oldscreeneffect">
          <div className="screentext">
            <div className="align-content">
              <div className="align-left"><p>Initializing 'OLD THE DOOOR' v0.01 ...........................................................</p>
                <p className="optional-welcome">
                  █░█░░░█ █▀▀ █░░ █▀▀ █▀▀█ █▀▄▀█ █▀▀ ░█<br />
                  █░█▄█▄█ █▀▀ █░░ █░░ █░░█ █░▀░█ █▀▀ ░█<br />
                  █░░▀░▀░ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀▀ ▀░░░▀ ▀▀▀ ░█<br />
                  <br />{currentStory.author}&lt;certified cyborg&gt;<br />gone back in time<br />___________________________________________________________
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
              placeholder content {currentStory.synopsis}
            </p>

          </div>

        </div>

      </div>
    </main>

  );
};
//           <div onClick={toggleButtonVisibility}>click {buttonIsVisible ? <ArrowUpCircle size="99" /> : <ArrowUpCircle size="10" /> }</div>

GameScreen.propTypes = {
  // J'essaye de faire en sorte qu'un bouton apparait selon un evenement.
  // Au final ce serais avec un evenement scroll
  // Mais si j'arrivais a le faire marcher avec un bouton ce serais bien deja.
  // buttonIsVisible: PropTypes.bool.isRequired,
  // toggleButtonVisibility: PropTypes.func.isRequired,

  // les infos de l'aventure courant
  currentStory: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    synopsis: PropTypes.string,
    firstChapter: PropTypes.string,
    author: PropTypes.object.isRequired,
  }).isRequired,

  fetchCurrentStory: PropTypes.func.isRequired,

  // Vu que le story est une autre table dans la bdd que le chapitre,
  // ça voudrait dire que les props soient séparés?
  // le chapitre courant.

  /* currentChapter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    keyword: PropTypes.string.isRequired,
    lockword: PropTypes.string.isRequired,
    unlock_text: PropTypes.string.isRequired,
    parentChapter: PropTypes.object,
    forStory: PropTypes.object.isRequired,
  }).isRequired,

  */
};
// parentChapter not always full
export default GameScreen;
