import { connect } from 'react-redux';

import GameScreen from 'src/components/GameScreen';

import {
  fetchCurrentStory,
  saveCurrentStory,
  fetchCurrentChapter,
  saveCurrentChapter,
  verifyAnswer,
} from 'src/actions/gameScreen';

import { displayLoader } from 'src/actions/utils';

// === mapStateToProps
const mapStateToProps = (state) => ({
  trueAnswer: state.gameScreen.trueAnswer,
  loading: state.utils.loading,

  currentStory: state.gameScreen.currentStory,

  currentChapter: state.gameScreen.currentChapter,

});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({

  fetchCurrentStory: (slug) => {
    dispatch(fetchCurrentStory(slug));
  },

  saveCurrentStory: () => {
    dispatch(saveCurrentStory());
  },
  // could be fetch first chapter to be honest
  fetchCurrentChapter: () => {
    dispatch(fetchCurrentChapter());
  },
  // saveCurrentChapter can stay as it is
  saveCurrentChapter: () => {
    dispatch(saveCurrentChapter());
  },

  handleCheckAnswer: (keywordGuess, lockwordGuess) => {
    dispatch(verifyAnswer(keywordGuess, lockwordGuess));
  },

  displayLoader: () => {
    dispatch(displayLoader());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
