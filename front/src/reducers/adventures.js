import {
  SAVE_ADVENTURES_HOME,
  SAVE_ADVENTURES_CATALOG,
  SAVE_ADVENTURE_SELECTED,
  SAVE_ADVENTURES_ACTIVE_NUMBER,
} from 'src/actions/adventures';

const initialState = {
  adventuresHome: [],
  adventuresCatalog: [],
  adventureSelected: {
    title: '',
    description: '',
    createdAt: '',
    author: {
      username: '',
    },
  },
  adventuresActiveNumber: '',
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

    case SAVE_ADVENTURES_ACTIVE_NUMBER:
      return {
        ...state,
        adventuresActiveNumber: action.adventuresActiveNumber,
      };

    default: return state;
  }
};

export default adventures;
