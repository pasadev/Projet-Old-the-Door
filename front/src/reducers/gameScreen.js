import { TOGGLE_BUTTON_VISIBILITY } from 'src/actions/gameScreen';

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

    default: return state;
  }
};

export default gameScreen;
