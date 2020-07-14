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
    console.log(slug);
    fetchCurrentStory(slug);
    // no problemo, all is fixed
    displayLoader();
  }, []);
  return (
    <>
      {loading && <Loader />}
      {!loading && (
      <main className="screenCase">
        <div className="gameScreen">
          <div className="gameScreen-header">
            <div className="gameScreen-header-timer">
              15:05
            </div>
            <div className="gameScreen-header-text">
              <Typist
                cursor={{ show: false }}
              >
                <span>.....Initialisation de l'histoire v0.01.....</span>
                <Typist.Backspace count={39} delay={200} />
                <span>Chargement des chapitres.....</span>
                <Typist.Backspace count={29} delay={200} />
                <span>{currentStory.title.toUpperCase()}.....</span>
              </Typist>
              <div className="gameScreen-content-infos">
                <Typist
                  cursor={{ show: false }}
                >
                  <Typist.Delay ms={5000} />
                  <span>{currentStory.author.username}</span>
                </Typist>
              </div>
            </div>
          </div>

          <div className="gameScreen-content">

            {/* Call previousChapters components here to display them */}
            {previousChapters.length !== 0
            && <PreviousChapters previousChapters={previousChapters} />}
            {console.log(currentChapter)}

            {/* Display the current chapter here */}

            <Chapter {... currentChapter} trueAnswer={trueAnswer} fetchNextChapter={fetchNextChapter} />

            {/* Todo: Try without deversing the state currentChapter but just passing an argument like previousChapters */}

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
              <button type="submit">Tester la combinaison</button>
            </form>
          </div>
        </div>
      </main>
      )}
    </>
  );
};

GameScreen.propTypes = {

  changeField: PropTypes.func.isRequired,
  gameKey: PropTypes.string.isRequired,
  gameLock: PropTypes.string.isRequired,

  displayLoader: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  trueAnswer: PropTypes.bool.isRequired,

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
