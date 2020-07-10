import { connect } from 'react-redux';

import GameScreen from 'src/components/GameScreen';

import {
  fetchCurrentStory,
  saveCurrentStory,
  fetchCurrentChapter,
  saveCurrentChapter,
} from 'src/actions/gameScreen';

import { displayLoader } from 'src/actions/utils';

// === mapStateToProps
const mapStateToProps = (state) => ({
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

  fetchCurrentChapter: () => {
    dispatch(fetchCurrentChapter());
  },

  saveCurrentChapter: () => {
    dispatch(saveCurrentChapter());
  },

  displayLoader: () => {
    dispatch(displayLoader());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
