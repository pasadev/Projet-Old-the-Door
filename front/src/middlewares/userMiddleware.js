import axios from 'axios';

import {
  LOG_IN,
  LOG_OUT,
  saveUser,
  REGISTER_USER,
  logError,
} from 'src/actions/user';

import {
  redirectOn,
} from 'src/actions/utils';

import { baseURL } from 'src/utils';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().user;
      // withCredentials : autorisation d'accéder au cookie
      axios.post(`${baseURL}/api/v0/login`, {
        email,
        password,
      },
      {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveUser(response.data[0]));
          localStorage.setItem('currentuser', JSON.stringify(response.data[0]));
          localStorage.setItem('isLogged', `${true}`);
          store.dispatch(redirectOn());
        })
        .catch((error) => {
          store.dispatch(logError());
          console.warn(error);
        });

      next(action);
      break;
    }

    case LOG_OUT: {
      localStorage.removeItem('isLogged');
      localStorage.removeItem('currentuser');

      next(action);
      break;
    }

    case REGISTER_USER: {
      const {
        emailRegister: email,
        passwordRegister: password,
        nickname: username,
        firstname,
        lastname,
        passwordConfirmation,
      } = store.getState().user;

      // withCredentials : autorisation d'accéder au cookie
      axios.post(`${baseURL}/api/v0/users`, {
        email,
        password,
        username,
        firstname,
        lastname,
        passwordConfirmation,
      }, {
        withCredentials: true,
        headers: true,
      })
        .then((response) => {
          store.dispatch(saveUser(response.data.info, response.data.logged));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default userMiddleware;
