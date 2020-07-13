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
} from 'src/actions/gameScreen';

import { displayLoader } from 'src/actions/utils';

// === mapStateToProps
const mapStateToProps = (state) => ({
  trueAnswer: state.gameScreen.trueAnswer,
  loading: state.utils.loading,

  currentStory: state.gameScreen.currentStory,

  currentChapter: state.gameScreen.currentChapter,

  gameKey: state.gameScreen.gameKey,

  gameLock: state.gameScreen.gameLock,

  previousChapters: state.gameScreen.previousChapters,

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
    dispatch(toggleAnswerValue());
    dispatch(fetchNextChapter());
  },

  displayLoader: () => {
    dispatch(displayLoader());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
