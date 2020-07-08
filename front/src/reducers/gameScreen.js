import { TOGGLE_BUTTON_VISIBILITY, SAVE_CURRENT_STORY } from 'src/actions/gameScreen';

const initialState = {
  buttonIsVisible: false,
  currentStory: [],
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

    case SAVE_CURRENT_STORY:

      return {
        ...state,

        currentStory: action.currentStory,
      };

    default: return state;
  }
};

export default gameScreen;
