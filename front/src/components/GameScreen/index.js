/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import { ArrowUpCircle } from 'react-feather';
import { useParams, Link } from 'react-router-dom';
import Loader from 'src/components/Loader';
import Typist from 'react-typist';
import { checkAnswer } from 'src/utils';

import GameScreenField from './GameScreenField';
import PreviousChapters from './PreviousChapters';
import Chapter from './Chapter';

import './gameScreen.scss';

const GameScreen = ({
  // buttonIsVisible,
  // toggleButtonVisibility,
  changeField,
  gameKey,
  gameLock,
  blockField,

  currentStory,
  fetchCurrentStory,
  currentChapter,
  fetchNextChapter,
  previousChapters,
  handleCheckAnswer,
  // initialState trueAnswer is false, if after check submit === answer then switch to true,
  trueAnswer,

  displayLoader,
  loading,
  loadingChapter,
  showSuccessMessage,
  timerCounter,
  setCounter,
  timerIsRunning,
  showWrongAnswerMessage,
  giveHint,
  showHint,
  resetInitialState,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleCheckAnswer(checkAnswer({ gameKey }.gameKey, { gameLock }.gameLock, `${currentChapter.keyword}`, `${currentChapter.lockword}`));
    // checkAnswer takes fours values, keywordGuess, lockwordGuess, keyAnswer, lockAnswer
    // it gives out true if both answers are right

    // {gameKey}.gameKey looks dirty, but it works
  };
  const { slug } = useParams();
  useEffect(() => {
    // component did mount
    // console.log(slug);
    resetInitialState();
    fetchCurrentStory(slug);
    displayLoader();
  }, []);

  useEffect(() => {
  // put converter of seconds to mins here for now

    const timer = /* condition here */timerIsRunning && setInterval(() => setCounter(timerCounter + 1), 1000);
    return () => clearInterval(timer);
  }, [timerIsRunning, timerCounter]);
  // when timerIsRunning was the only dependency it only counted to 1 and got stuck
  // timerCounter needs to be a dependency too because it wouldn't calculate the rest otherwise
  const minutes = Math.floor(timerCounter / 60);
  const seconds = timerCounter - (minutes * 60);
  return (
    <>
      {loading && <Loader />}
      {!loading && (
      <main className="screenCase">
        <div className="gameScreen">
          <div className="gameScreen-header">
            <div className="gameScreen-header-timer">
              { minutes < 10 && 0 }{ minutes }:{ seconds < 10 && 0 }{ seconds }
            </div>
            <div className="gameScreen-header-text">
              <Typist
                cursor={{ hideWhenDone: true }}
                avgTypingDelay={15}
              >
                <span>■■■ Initialisation de l'histoire v1.0</span>
                <Typist.Backspace count={33} delay={600} />
                <span>Chargement des chapitres</span>
                <Typist.Backspace count={24} delay={600} />
                <span>{currentStory.title.toUpperCase()} by {currentStory.author.username}</span>
              </Typist>
            </div>
          </div>

          <div className="gameScreen-content">

            {/* Call previousChapters components here to display them */}
            {previousChapters.length !== 0
            && <PreviousChapters previousChapters={previousChapters} />}

            {/* Display the current chapter here */}
            {loadingChapter && <div>Loading Chapter</div>}
            {!showSuccessMessage && !loadingChapter && <Chapter {... currentChapter} trueAnswer={trueAnswer} fetchNextChapter={fetchNextChapter} previousChapters={previousChapters} />}

            {showSuccessMessage && <Typist cursor={{ show: false }} avgTypingDelay={15}><div className="gameScreen-storySuccess">Bravo, vous avez terminé le scénario "{currentStory.title}" <Link to="/aventures/"> <span className="gameScreen-moreAdventureButton">> Voir les autres aventures</span></Link></div></Typist>}
            {showWrongAnswerMessage && <Typist cursor={{ show: false }} avgTypingDelay={15}><div className="gameScreen-answerError">Mauvaise combinaison !</div> <Typist.Backspace count={23} delay={400} /></Typist>}

            {!showSuccessMessage && (
            <form className="gameScreen-form" onSubmit={handleSubmit}>
              <div className="gameScreen-form-row" id="keyForm">
                <label className="gameScreen-label" htmlFor="gameKey">Clé:</label>
                <GameScreenField
                  name="gameKey"
                  placeholder="Clé"
                  onChange={showHint === 1 ? blockField : changeField}
                  value={showHint === 1 ? (gameKey = `${currentChapter.keyword}`) : `${gameKey}`}
                />
              </div>
              <div className="gameScreen-form-row" id="lockForm">
                <label className="gameScreen-label" htmlFor="gameLock">Serrure:</label>
                <GameScreenField
                  name="gameLock"
                  placeholder="Serrure"
                  onChange={showHint === 2 ? blockField : changeField}
                  value={showHint === 2 ? (gameLock = `${currentChapter.lockword}`) : `${gameLock}`}
                />
              </div>
              <button className="gameScreen-formButton" type="submit">Tester la combinaison</button>
              {!showSuccessMessage
              && (!trueAnswer && (<button id="hintButton" className="gameScreen-hintButton" type="button" onClick={giveHint} {...showHint !== 0 && document.getElementById('hintButton').setAttribute('disabled', 'disabled')}>[Indice]</button>))}
              {showHint === 1 && <> {document.getElementById('gameKey').setAttribute('value', `${currentChapter.keyword}`)}</>}
            </form>
            )}
          </div>
        </div>
        <div className="computer-facade">
          <div className="computer-brand">
            <p className="computer-factory"> Fabigeon 8000</p>
            <p className="computer-factory"> N°: 682984XCE</p>
            <p className="computer-factory"> Model: fabirex</p>
            <p className="computer-factory"> OLD THE DOOR</p>
          </div>

          <div className="computer-blowhole"> </div>

          <div className="disk-reader">
            <div className="disk-insert"> </div>
            <div className="disk-eject">
              <div className="eject">
                <div className="triangle"> </div>
                <div className="rectangle"> </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      )}
    </>
  );
};

GameScreen.propTypes = {
  resetInitialState: PropTypes.func.isRequired,
  setCounter: PropTypes.func.isRequired,
  timerCounter: PropTypes.number.isRequired,
  timerIsRunning: PropTypes.bool.isRequired,
  showWrongAnswerMessage: PropTypes.bool.isRequired,

  giveHint: PropTypes.func.isRequired,
  showHint: PropTypes.number.isRequired,

  blockField: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  gameKey: PropTypes.string.isRequired,
  gameLock: PropTypes.string.isRequired,

  displayLoader: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  trueAnswer: PropTypes.bool.isRequired,
  loadingChapter: PropTypes.bool.isRequired,
  showSuccessMessage: PropTypes.bool.isRequired,

  fetchCurrentStory: PropTypes.func.isRequired,
  fetchNextChapter: PropTypes.func.isRequired,
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

  handleCheckAnswer: PropTypes.func.isRequired,
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

  previousChapters: PropTypes.array.isRequired,

};
// parentChapter not always full
export default GameScreen;
