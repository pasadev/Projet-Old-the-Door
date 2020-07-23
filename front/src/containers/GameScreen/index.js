import { connect } from 'react-redux';

import GameScreen from 'src/components/GameScreen';

import {
  fetchCurrentStory,
  saveCurrentStory,
  fetchFirstChapter,
  saveCurrentChapter,
  fetchNextChapter,
  toggleAnswerValue,
  updateAnswerField,
  clearGameScreenInput,
  hideChapter,
  setCounter,
  toggleWrongAnswerMessage,
  applyPenalty,
  giveHint,
  blockField,
  resetInitialState,
} from 'src/actions/gameScreen';

import { displayLoader } from 'src/actions/utils';

// === mapStateToProps
const mapStateToProps = (state) => ({
  trueAnswer: state.gameScreen.trueAnswer,
  loading: state.utils.loading,
  loadingChapter: state.gameScreen.loadingChapter,

  currentStory: state.gameScreen.currentStory,

  currentChapter: state.gameScreen.currentChapter,

  gameKey: state.gameScreen.gameKey,

  gameLock: state.gameScreen.gameLock,

  previousChapters: state.gameScreen.previousChapters,

  showSuccessMessage: state.gameScreen.showSuccessMessage,

  timerCounter: state.gameScreen.timerCounter,

  timerIsRunning: state.gameScreen.timerIsRunning,

  showWrongAnswerMessage: state.gameScreen.showWrongAnswerMessage,

  showHint: state.gameScreen.showHint,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({

  resetInitialState: () => {
    dispatch(resetInitialState());
  },

  changeField: (newValue, name) => {
    dispatch(updateAnswerField(newValue, name));
  },

  blockField: () => {
    dispatch(blockField());
  },

  fetchCurrentStory: (slug) => {
    dispatch(fetchCurrentStory(slug));
  },

  saveCurrentStory: () => {
    dispatch(saveCurrentStory());
  },
  // could be fetch first chapter to be honest
  fetchFirstChapter: () => {
    dispatch(hideChapter);
    dispatch(fetchFirstChapter());
  },
  // saveCurrentChapter can stay as it is
  saveCurrentChapter: () => {
    dispatch(saveCurrentChapter());
  },

  handleCheckAnswer: (thisIsABoolOrNoValue) => {
    if (thisIsABoolOrNoValue === true) {
      dispatch(toggleAnswerValue());
    }
    else if (thisIsABoolOrNoValue === 'no_value') {
      // do nothing
    }
    else {
      dispatch(
        // show error message when wrong answer
        toggleWrongAnswerMessage(),
        // apply penalty in seconds
        dispatch(applyPenalty(60)),
        // after xxx milliseconds, hide error message
        setTimeout(() => {
          dispatch(toggleWrongAnswerMessage());
        }, 2500),
      );
    }
  },

  // when the user clicks on next chapter button, fetchNextChapter

  fetchNextChapter: () => {
    dispatch(hideChapter());
    // stop rendering of chapter during load
    dispatch(clearGameScreenInput());
    // remove value of gameKey and gameLock
    dispatch(toggleAnswerValue());
    // trueAnswer goes to false
    dispatch(fetchNextChapter());
    // api request
  },

  displayLoader: () => {
    dispatch(displayLoader());
  },

  setCounter: (currentTime) => {
    dispatch(setCounter(currentTime));
  },

  toggleWrongAnswerMessage: () => {
    dispatch(toggleWrongAnswerMessage());
  },

  giveHint: () => {
    const randomHint = Math.floor(Math.random() * 2) + 1;
    // for now there are two outcomes, key or lock to give a direct answer for.
    // Giving a more indirect hint would be in the information of the chapter
    // but that is not yet implemented
    dispatch(giveHint(randomHint));
    dispatch(applyPenalty(300));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
