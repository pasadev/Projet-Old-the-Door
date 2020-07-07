import axios from 'axios';

import {
  FETCH_ADVENTURES_HOME,
  saveAdventuresHome,
} from 'src/actions/adventures';

const adventuresMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ADVENTURES_HOME:
      // API request for the last three adventures
      axios.get('http://damien-toscano.vpnuser.lan:8000/api/v0/stories?last=3')
        .then((response) => {
          store.dispatch(saveAdventuresHome(response.data[0]));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    default:
      next(action);
  }
};
export default adventuresMiddleware;
