import axios from 'axios';

import {
  LOG_IN,
  LOG_OUT,
  CHECK_LOGGED,
  REGISTER_USER,
  saveUser,
} from 'src/actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().user;
      console.log(email);
      console.log(password);
      // withCredentials : autorisation d'accéder au cookie
      axios.post('http://localhost:8000/api/v0/login', {
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
        nickname: username,
        firstname,
        lastname,
        password: {
          first: passwordRegister,
          second: passwordConfirmation,
        },
      } = store.getState().user;
      // withCredentials : autorisation d'accéder au cookie
      axios.post('http://localhost:8000/api/v0/users', {
        email,
        username,
        firstname,
        lastname,
        password: {
          first: passwordRegister,
          second: passwordConfirmation,
        },
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

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default userMiddleware;
