/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ArrowUpCircle } from 'react-feather';
import { useParams } from 'react-router-dom';
import Loader from 'src/components/Loader';
import Typist from 'react-typist';

import './gameScreen.scss';

const GameScreen = ({
  // buttonIsVisible,
  // toggleButtonVisibility,
  currentStory,
  fetchCurrentStory,
  fetchCurrentChapter,
  currentChapter,

  displayLoader,
  loading,
}) => {
  const { slug } = useParams();
  useEffect(() => {
    console.log('componentDidMount');
    fetchCurrentStory(slug);
    fetchCurrentChapter();
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
              <Typist>
                Initialisation 'OLD THE DOOOR' v0.01 ..................................
              </Typist>
            </div>
          </div>
          <form className="gameScreen-form">
            <div className="gameScreen-form-field">
              <label htmlFor="game-key">Clé :</label>
              <input name="game-key" id="game-key" placeholder="Clé" className="gameScreen-form-input" />
            </div>
            <div className="gameScreen-form-field">
              <label htmlFor="game-lock">Serrure :</label>
              <input name="game-lock" id="game-lock" placeholder="Serrure" className="gameScreen-form-input" />
            </div>
          </form>
          <div className="gameScreen-content">
            <div className="gameScreen-content-infos">
              <Typist>
                <Typist.Delay ms={6000} />
                <span>{currentStory.author.username}</span>
                <span>{currentChapter.unlockText}</span>
                <span>placeholder currentStory synposis {currentStory.synopsis}</span>
              </Typist>
            </div>
            <div className="gameScreen-content-text">
              <Typist>
                <Typist.Delay ms={9000} />
                this is where chapter text is : {currentChapter.content}
              </Typist>
            </div>
          </div>
        </div>
      </main>
      )}
    </>
  );
};

GameScreen.propTypes = {
  displayLoader: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,

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
