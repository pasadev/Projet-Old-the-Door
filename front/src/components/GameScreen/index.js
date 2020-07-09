/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ArrowUpCircle } from 'react-feather';
import Typist from 'react-typist';

import './gamescreen.scss';

const GameScreen = ({
  // buttonIsVisible,
  // toggleButtonVisibility,
  currentStory,
  fetchCurrentStory,
  fetchCurrentChapter,
  currentChapter,
}) => {
  useEffect(() => {
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
                  {currentStory.id}&lt;certified cyborg&gt;<br />gone back in time<br />___________________________________________________________
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
              {currentStory.author.username}<br />
              {currentChapter.unlockText}<br />
              placeholder currentStory synposis {currentStory.synopsis}
            </p>
            <div className="game-text">
              <Typist>
                this is where chapter text isthis is where chapter text isthis is where chapter text isthis is where chapter text isthis is where chapter text isthis is where chapter text is : {currentChapter.content}
              </Typist>
            </div>

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
  // we use one of type to stop console throwing errors
  // since we define each data in the initialstate to stop errors
  // and it is a '' in the initialstate.
  currentStory: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    title: PropTypes.string,
    synopsis: PropTypes.string,
    firstChapter: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
    author: PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,

  fetchCurrentChapter: PropTypes.func.isRequired,

  // In the database the chapters and stories are separate entities, so
  // the props here are separate too

  currentChapter: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    keyword: PropTypes.string.isRequired,
    lockword: PropTypes.string.isRequired,
    unlockText: PropTypes.string.isRequired,
    parentChapter: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
    forStory: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]).isRequired,
  }).isRequired,

};
// parentChapter not always full
export default GameScreen;
