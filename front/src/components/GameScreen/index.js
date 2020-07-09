/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ArrowUpCircle } from 'react-feather';

import './game.scss';

const GameScreen = ({
  // buttonIsVisible,
  // toggleButtonVisibility,
  currentStory,
  fetchCurrentStory,
  fetchCurrentChapter,
  currentChapter,
}) => {
  useEffect(() => {
    console.log('componentDidMount');
    fetchCurrentStory();
    fetchCurrentChapter();
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
                  &lt;certified cyborg&gt;<br />gone back in time<br />___________________________________________________________
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
              placeholder currentStory synposis {currentStory.synopsis}
            </p>
            <p className="game-text">
              this is where chapter text is {currentChapter.content}
            </p>

          </div>

        </div>

      </div>
    </main>

  );
};
//           <div onClick={toggleButtonVisibility}>click {buttonIsVisible ? <ArrowUpCircle size="99" /> : <ArrowUpCircle size="10" /> }</div>

GameScreen.propTypes = {
  // I had problems which were maybe fixed by importing the container instead of component in App,
  // haven't tried again
  // buttonIsVisible: PropTypes.bool.isRequired,
  // toggleButtonVisibility: PropTypes.func.isRequired,

  fetchCurrentStory: PropTypes.func.isRequired,
  // currentStory looks like this
  currentStory: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    synopsis: PropTypes.string,
    firstChapter: PropTypes.object,
    author: PropTypes.object.isRequired,
  }).isRequired,

  fetchCurrentChapter: PropTypes.func.isRequired,

  // In the database the chapters and stories are separate entities, so
  // the props here are separate too

  currentChapter: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    keyword: PropTypes.string.isRequired,
    lockword: PropTypes.string.isRequired,
    unlock_text: PropTypes.string.isRequired,
    parentChapter: PropTypes.object,
    forStory: PropTypes.object.isRequired,
  }).isRequired,

};
// parentChapter not always full
export default GameScreen;
