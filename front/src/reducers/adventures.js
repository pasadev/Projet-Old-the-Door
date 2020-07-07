import { SAVE_ADVENTURES_HOME } from 'src/actions/adventures';

const initialState = {
  adventuresHome: [],
};

const adventures = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ADVENTURES_HOME:

      return {
        ...state,
        adventuresHome: action.adventuresHome,
      };

    default: return state;
  }
};

export default adventures;
