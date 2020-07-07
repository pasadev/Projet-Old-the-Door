import { UPDATE_USER_FIELD, SAVE_USER } from 'src/actions/user';

const initialState = {
  // contenu de l'input pour l'adresse e-mail
  email: '',
  // contenu de l'input pour le mot de passe
  password: '',
  // informations sur l'utilisateur
  info: {},
  // indique si l'utilisateur est loggué
  isLogged: false,
};

const adventures = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_USER_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    case SAVE_USER:
      return {
        ...state,
        info: action.data,
        isLogged: action.isLogged,
        email: '',
        password: '',
      };

    default: return state;
  }
};

export default user;
