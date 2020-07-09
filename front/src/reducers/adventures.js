import {
  SAVE_ADVENTURES_HOME,
  SAVE_ADVENTURES_CATALOG,
  SAVE_ADVENTURE_SELECTED,
} from 'src/actions/adventures';

const initialState = {
  adventuresHome: [],
  adventuresCatalog: [],
  adventureSelected: [],
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

    case SAVE_ADVENTURE_SELECTED:
      return {
        ...state,
        adventureSelected: action.adventureSelected,
      };

    default: return state;
  }
};

export default adventures;
