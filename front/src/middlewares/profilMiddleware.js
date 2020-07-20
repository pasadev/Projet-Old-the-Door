import axios from 'axios';

import { hideLoader } from 'src/actions/utils';
import { baseURL } from 'src/utils';

import { FETCH_CREATED_ADVENTURES, saveCreatedAdventures } from '../actions/profil';

const profilMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CREATED_ADVENTURES:
      console.log(action);
      console.log(action.authorId);
      axios.get(`${baseURL}/api/v0/stories/?author_id=[${action.authorId}]`)
        .then((response) => {
          console.log(response);
          store.dispatch(saveCreatedAdventures(response.data[0]));
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
