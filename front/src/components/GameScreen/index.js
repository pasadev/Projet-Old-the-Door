/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import { ArrowUpCircle } from 'react-feather';
import { useParams } from 'react-router-dom';
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
    console.log(slug);
    fetchCurrentStory(slug);
    displayLoader();
  }, []);

  useEffect(() => {
    const timer = /* condition here */timerIsRunning && setInterval(() => setCounter(timerCounter + 1), 1000);
    return () => clearInterval(timer);
  }, [timerIsRunning, timerCounter]);
  // when timerIsRunning was the only dependency it only counted to 1 and got stuck
  // timerCounter needs to be a dependency too because it wouldn't calculate the rest otherwise

  return (
    <>
      {loading && <Loader />}
      {!loading && (
      <main className="screenCase">
        <div className="gameScreen">
          <div className="gameScreen-header">
            <div className="gameScreen-header-timer">
              { timerCounter }
            </div>
            <div className="gameScreen-header-text">
              <Typist
                cursor={{ blink: true, hideWhenDone: true }}
                avgTypingDelay={30}
              >
                <span>.....Initialisation de l'histoire v0.01.....</span>
                <Typist.Backspace count={39} delay={600} />
                <span>Chargement des chapitres.....</span>
                <Typist.Backspace count={29} delay={600} />
                <span>{currentStory.title.toUpperCase()}.....by {currentStory.author.username}</span>
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

            {showSuccessMessage && <Typist cursor={{ show: false }} avgTypingDelay={15}><div>Success, you win </div></Typist>}

            <form className="gameScreen-form" onSubmit={handleSubmit}>

              <label htmlFor="gameKey">Clé :</label>
              <GameScreenField
                name="gameKey"
                placeholder="Clé"
                onChange={changeField}
                value={gameKey}
              />

              <label htmlFor="gameLock">Serrure :</label>
              <GameScreenField
                name="gameLock"
                placeholder="Serrure"
                onChange={changeField}
                value={gameLock}
              />
              <button className="gameScreen-formButton" type="submit">=> Tester la combinaison</button>
            </form>
          </div>
        </div>
      </main>
      )}
    </>
  );
};

GameScreen.propTypes = {
  setCounter: PropTypes.func.isRequired,
  timerCounter: PropTypes.number.isRequired,
  timerIsRunning: PropTypes.bool.isRequired,

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
