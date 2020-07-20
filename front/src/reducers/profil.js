import {
  SAVE_CREATED_ADVENTURES,
  SAVE_OWN_PARTIES,
} from 'src/actions/profil';

const initialState = {
  showCreatedAdventures: false,
  createdAdventures: [],
  ownParties: [],
};

const profil = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CREATED_ADVENTURES:
      return {
        ...state,

        createdAdventures: action.createdAdventures,
      };

    case SAVE_OWN_PARTIES:
      return {
        ...state,

        ownParties: action.ownParties,
      };

    default: return state;
  }
};

export default profil;
