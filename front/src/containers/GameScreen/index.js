import { connect } from 'react-redux';

import GameScreen from 'src/components/GameScreen';

import { toggleButtonVisibility, fetchCurrentStory, saveCurrentStory } from 'src/actions/gameScreen';

// === mapStateToProps
const mapStateToProps = (state) => ({
  buttonIsVisible: state.gameScreen.buttonIsVisible,
  currentStory: state.gameScreen.currentStory,

  // ici c'est state.gameScreen.buttonIsVisible
  // Mais dans le reducer c'est state.buttonIsVisible
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  toggleButtonVisibility: () => {
    dispatch(toggleButtonVisibility());
  },

  fetchCurrentStory: () => {
    dispatch(fetchCurrentStory());
  },

  saveCurrentStory: () => {
    dispatch(saveCurrentStory());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
