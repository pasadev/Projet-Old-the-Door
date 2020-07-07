import { connect } from 'react-redux';

import GameScreen from 'src/components/Game';

import { toggleButtonVisibility } from 'src/actions/game';

// === mapStateToProps
const mapStateToProps = (state) => ({
  buttonIsVisible: state.gameScreen.buttonIsVisible,
  currentStory: state.gameScreen.currentStory,

  //ici c'est state.gameScreen.buttonIsVisible
  //Mais dans le reducer c'est state.buttonIsVisible
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  toggleButtonVisibility: () => {
    dispatch(toggleButtonVisibility());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
