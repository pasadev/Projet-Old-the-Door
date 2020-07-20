import {
  SAVE_CREATED_ADVENTURES,
} from 'src/actions/profil';

const initialState = {
  showCreatedAdventures: false,
  createdAdventures: [],
};

const profil = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CREATED_ADVENTURES:
      return {
        ...state,

        createdAdventures: action.createdAdventures,
      };
    default: return state;
  }
};

export default profil;
