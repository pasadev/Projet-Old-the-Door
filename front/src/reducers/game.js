import { TOGGLE_BUTTON_VISIBILITY } from 'src/actions/game';

const initialState = {
  buttonIsVisible: false,
};

const gameScreen = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_BUTTON_VISIBILITY:

      return {
        ...state,

        toggleButtonVisibility: !state.buttonIsVisible,

      };

    default: return state;
  }
};

export default gameScreen;
