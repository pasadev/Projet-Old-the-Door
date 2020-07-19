import axios from 'axios';

import {
  LOG_IN,
  LOG_OUT,
  saveUser,
  REGISTER_USER,
  registerError,
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
          sessionStorage.setItem('currentuser', JSON.stringify(response.data[0]));
          sessionStorage.setItem('isLogged', `${true}`);
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
      const { id } = store.getState().user.user;
      axios.post(`${baseURL}/api/v0/logout`, {
        id,
      },
      {
        withCredentials: true,
      })
        .then(() => {
          sessionStorage.removeItem('isLogged');
          sessionStorage.removeItem('currentuser');
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    case REGISTER_USER: {
      const {
        emailRegister: email,
        nickname: username,
        firstname,
        lastname,
        passwordFirst: first,
        passwordSecond: second,
      } = store.getState().user;
      // withCredentials : autorisation d'accéder au cookie
      axios.post(`${baseURL}/api/v0/users`, {
        email,
        username,
        firstname,
        lastname,
        password: {
          first,
          second,
        },
      }, {
        withCredentials: true,
      })
        .then((response) => {
          // Save user only for http 201
          if (response.status === 201) {
            store.dispatch(saveUser(response.data));
            sessionStorage.setItem('currentuser', JSON.stringify(response.data));
            sessionStorage.setItem('isLogged', `${true}`);
            store.dispatch(redirectOn());
          }
        })
        .catch((error) => {
          // Display error message
          store.dispatch(registerError());
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
