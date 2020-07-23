import {
  SAVE_ADVENTURES_HOME,
  SAVE_ADVENTURES_CATALOG,
  SAVE_ADVENTURE_SELECTED,
  SAVE_ADVENTURES_ACTIVE_NUMBER,
  SAVE_ADVENTURE_TIMER,
  CLEAR_ADVENTURE_TIMER,
} from 'src/actions/adventures';

const initialState = {
  adventuresHome: [],
  adventuresCatalog: [],
  adventureSelected: {
    id: '',
    title: '',
    description: '',
    createdAt: '',
    author: {
      username: '',
      id: 0,
    },
    active: false,
    slug: '',
  },
  adventuresActiveNumber: 0,

  adventureTimer: {
    average: '',
    best: '',
    number: '',
  },

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
    case SAVE_ADVENTURE_TIMER:
      return {
        ...state,
        adventureTimer: action.adventureTimer,
      };
    case CLEAR_ADVENTURE_TIMER:
      return {
        ...state,
        adventureTimer: {
          average: '',
          best: '',
          number: '',
        },

      };
    default: return state;
  }
};

export default adventures;
