import axios from 'axios';

import {
  LOG_IN,
  LOG_OUT,
  CHECK_LOGGED,
  saveUser,
} from 'src/actions/user';

const userMiddleware = (store) => (next) => (action) => {
  const baseURL = 'http://ec2-3-80-166-219.compute-1.amazonaws.com/O-ld-the-door/back';
  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().user;

      // withCredentials : autorisation d'accéder au cookie
      axios.post(`${baseURL}/api/v0/login`, {
        email,
        password,
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
    }

    case LOG_OUT:
      axios.post(`${baseURL}/api/v0/logout`, {
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
      axios.post(`${baseURL}/api/v0/isLogged`, {
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

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default userMiddleware;
