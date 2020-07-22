import {
  UPDATE_REGISTER_FIELD,
  UPDATE_USER_FIELD,
  SAVE_USER,
  LOG_OUT,
  REGISTER_ERROR,
  LOG_ERROR,
} from 'src/actions/user';

const initialState = {
  emailRegister: '',
  passwordFirst: '',
  passwordSecond: '',
  firstname: '',
  lastname: '',
  nickname: '',
  // contenu de l'input pour l'adresse e-mail
  email: '',
  // contenu de l'input pour le mot de passe
  password: '',
  // indique si l'utilisateur est loggué
  isLogged: JSON.parse(sessionStorage.getItem('isLogged')),
  user: JSON.parse(sessionStorage.getItem('currentuser')),
  registerError: false,
  loginError: false,
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_REGISTER_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    case UPDATE_USER_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    case REGISTER_ERROR:
      return {
        ...state,
        registerError: true,
        passwordFirst: '',
        passwordSecond: '',
      };

    case SAVE_USER:
      return {
        ...state,
        isLogged: true,
        user: action.data,
        email: '',
        password: '',
        emailRegister: '',
        passwordFirst: '',
        passwordSecond: '',
        firstname: '',
        lastname: '',
        nickname: '',
        registerError: false,
        loginError: false,
      };

    case LOG_ERROR:
      return {
        ...state,
        loginError: true,
        password: '',
      };

    case LOG_OUT:
      return {
        ...state,
        isLogged: null,
        user: {},
      };

    default: return state;
  }
};
export default user;
