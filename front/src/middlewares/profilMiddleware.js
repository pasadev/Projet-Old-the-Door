import axios from 'axios';

import { hideLoader } from 'src/actions/utils';
import { baseURL } from 'src/utils';

import {
  FETCH_CREATED_ADVENTURES,
  saveCreatedAdventures,
  FETCH_OWN_PARTIES,
  saveOwnParties,
  fetchOwnParties,
} from '../actions/profil';

const profilMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CREATED_ADVENTURES:
      axios.get(`${baseURL}/api/v0/stories/?author_id=${action.authorId}`)
        .then((response) => {
          store.dispatch(saveCreatedAdventures(response.data[0]));
          store.dispatch(fetchOwnParties(action.authorId));
        })
        .catch((error) => {
          store.dispatch(fetchOwnParties(action.authorId));
          console.warn(error);
        });

      next(action);
      break;
    case FETCH_OWN_PARTIES:
      axios.get(`${baseURL}/api/v0/parties?user_id=${action.authorId}`)
        .then((response) => {
          store.dispatch(saveOwnParties(response.data[0]));
          store.dispatch(hideLoader());
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
export default profilMiddleware;
