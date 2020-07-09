import { SAVE_ADVENTURES_HOME, SAVE_ADVENTURES_CATALOG } from 'src/actions/adventures';

const initialState = {
  adventuresHome: [],
  adventuresCatalog: [],
};

const adventures = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ADVENTURES_HOME:

      return {
        ...state,
        adventuresHome: action.adventuresHome,
      };

    case SAVE_ADVENTURES_CATALOG:

      return {
        ...state,
        adventuresCatalog: action.adventuresCatalog,
      };

    default: return state;
  }
};

export default adventures;
