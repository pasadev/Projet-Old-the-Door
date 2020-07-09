import { connect } from 'react-redux';

import GameScreen from 'src/components/GameScreen';

import {
  fetchCurrentStory,
  saveCurrentStory,
  fetchCurrentChapter,
  saveCurrentChapter,
} from 'src/actions/gameScreen';

// === mapStateToProps
const mapStateToProps = (state) => ({
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
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
