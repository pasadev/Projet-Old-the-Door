import axios from 'axios';

import {
  FETCH_CURRENT_STORY,
  saveCurrentStory,
  FETCH_CURRENT_CHAPTER,
  saveCurrentChapter,
} from 'src/actions/gameScreen';

import {
  hideLoader,
} from 'src/actions/utils';

const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CURRENT_STORY:

      axios.get(`http://damien-toscano.vpnuser.lan:8000/api/v0/stories/${action.slug}`)
      // chemin test
        .then((response) => {
          store.dispatch(saveCurrentStory(response.data[0]));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    case FETCH_CURRENT_CHAPTER:

      axios.get('http://damien-toscano.vpnuser.lan:8000/api/v0/chapters/12')
        .then((response) => {
          store.dispatch(saveCurrentChapter(response.data[0]));
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
export default gameMiddleware;
