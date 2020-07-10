import axios from 'axios';

import {
  FETCH_CURRENT_STORY,
  saveCurrentStory,
  fetchCurrentChapter,
  FETCH_CURRENT_CHAPTER,
  saveCurrentChapter,
} from 'src/actions/gameScreen';

import {
  hideLoader,
} from 'src/actions/utils';

const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CURRENT_STORY:
      console.log(action.slug);

      axios.get(`http://maxence-royer.vpnuser.lan:8000/api/v0/stories/${action.slug}`)
      // chemin test
        .then((response) => {
          store.dispatch(saveCurrentStory(response.data[0]));
          store.dispatch(fetchCurrentChapter(response.data[0].firstChapter.id));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    case FETCH_CURRENT_CHAPTER:

      console.log(action);
      axios.get(`http://maxence-royer.vpnuser.lan:8000/api/v0/chapters/${action.firstChapterId}`)
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
