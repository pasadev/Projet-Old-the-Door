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

  // ici c'est state.gameScreen.buttonIsVisible
  // Mais dans le reducer c'est state.buttonIsVisible
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({


  fetchCurrentStory: () => {
    dispatch(fetchCurrentStory());
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
