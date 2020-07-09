import axios from 'axios';

import {
  FETCH_ADVENTURES_HOME,
  saveAdventuresHome,
  FETCH_ADVENTURES_CATALOG,
  saveAdventuresCatalog,
} from 'src/actions/adventures';

import {
  hideLoader,
} from 'src/actions/utils';

const adventuresMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ADVENTURES_HOME:
      // API request for the last three adventures
      // http://maxence-royer.vpnuser.lan:8000/api/v0/stories?last=3
      axios.get('http://damien-toscano.vpnuser.lan:8000/api/v0/stories?last=3')
        .then((response) => {
          // dispatch to save the Adventures used in Home
          store.dispatch(saveAdventuresHome(response.data[0]));
          // dispatch to hide the loader
          store.dispatch(hideLoader());
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    case FETCH_ADVENTURES_CATALOG:
      // API request for the adventures catalog
      // http://maxence-royer.vpnuser.lan:8000/api/v0/stories
      axios.get('http://damien-toscano.vpnuser.lan:8000/api/v0/stories')
        .then((response) => {
          // dispatch to save the Adventures Catalog
          store.dispatch(saveAdventuresCatalog(response.data[0]));
          // dispatch to hide the loader
          store.dispatch(hideLoader());
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
