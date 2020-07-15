import axios from 'axios';

import {
  LOG_IN,
  LOG_OUT,
  CHECK_LOGGED,
  saveUser,
  REGISTER_USER,
} from 'src/actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().user;

      // withCredentials : autorisation d'accéder au cookie
      axios.post('http://maxence-royer.vpnuser.lan:8000/api/v0/login', {
        email,
        password,
      }, {
        credentials: 'include',
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

    case LOG_OUT:
      axios.post('http://localhost:3001/logout', {
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveUser(response.data.info, response.data.logged));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    case CHECK_LOGGED:
      axios.post('http://localhost:3001/isLogged', {
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveUser(response.data.info, response.data.logged));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

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
      axios.post('http://maxence-royer.vpnuser.lan:8000/api/v0/users', {
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
