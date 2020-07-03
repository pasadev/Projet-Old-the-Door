import { DO_SOMETHING } from 'src/actions/user';

const initialState = {

};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      // on retourne un nouveau state
      return {
        // en déversant les informations du state actuel
        ...state,
        // et en appliquant des modifications
        propriété_à_modifier_1: 'valeur',
        propriété_à_modifier_2: action.newValue,
      };

    default: return state;
  }
};

export default user;

