import { connect } from 'react-redux';

import GameScreen from 'src/components/GameScreen';

import {
  fetchCurrentStory,
  saveCurrentStory,
  fetchCurrentChapter,
  saveCurrentChapter,
  toggleAnswerValue,
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

  handleCheckAnswer: (thisIsABool) => {
    if (thisIsABool === true) {
      dispatch(toggleAnswerValue());
      console.log('answer is true');
    }
    else (console.log('handleCheckAnswer determined the answer is false'));
  },

  displayLoader: () => {
    dispatch(displayLoader());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
