import axios from 'axios';

import {
  FETCH_ADVENTURES_HOME,
  saveAdventuresHome,
} from 'src/actions/adventures';

const adventuresMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_ADVENTURES_HOME:
      // API request for the last three adventures
      axios.get('http://damien-toscano.vpnuser.lan:8000/api/v0/stories?last=3', {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((response) => {
          // on veut enregistrer les recettes dans le state => c'est le travail
          // du reducer => on dispatch une action qui sera traitée par un reducer
          store.dispatch(saveAdventuresHome(response.data));
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
