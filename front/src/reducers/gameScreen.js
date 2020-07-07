import { TOGGLE_BUTTON_VISIBILITY } from 'src/actions/gameScreen';
import { SAVE_ADVENTURE } from '../actions/gameScreen';

const initialState = {
  buttonIsVisible: false,
};

const gameScreen = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_BUTTON_VISIBILITY:

      return {
        ...state,

        buttonIsVisible: !state.buttonIsVisible,
        // pendant les test ça me dit que buttonIsVisible
        // et toggleButtonVisibility sont undefined
        // je sais pas pourquoi
      };

    case SAVE_ADVENTURE:

      return {
        ...state,

        currentStory: action.currentStory,
      };

    default: return state;
  }
};

export default gameScreen;
