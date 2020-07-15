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

});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({

  changeField: (newValue, name) => {
    dispatch(updateAnswerField(newValue, name));
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

  handleCheckAnswer: (thisIsABool) => {
    if (thisIsABool === true) {
      dispatch(toggleAnswerValue());
      console.log('answer is true');
    }
    else (console.log('handleCheckAnswer determined the answer is false'));
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
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
