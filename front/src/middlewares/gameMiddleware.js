import axios from 'axios';

import {
  FETCH_CURRENT_STORY,
  saveCurrentStory,
  fetchFirstChapter,
  FETCH_FIRST_CHAPTER,
  saveCurrentChapter,
  FETCH_NEXT_CHAPTER,
  savePreviousChapters,

  displayChapterAfterLoad,
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
          store.dispatch(fetchFirstChapter(response.data[0].firstChapter.id));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    case FETCH_FIRST_CHAPTER:

      axios.get(`http://damien-toscano.vpnuser.lan:8000/api/v0/chapters/${action.firstChapterId}`)
        .then((response) => {
          store.dispatch(saveCurrentChapter(response.data[0]));
          store.dispatch(hideLoader());
          store.dispatch(displayChapterAfterLoad());
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    case FETCH_NEXT_CHAPTER:
      // eslint-disable-next-line no-case-declarations
      const currentChapterForSave = store.getState().gameScreen.currentChapter;
      console.log(action);
      axios.get(`http://damien-toscano.vpnuser.lan:8000/api/v0/chapters/${currentChapterForSave.id}/child`)
        .then((response) => {
          console.log(response);
          store.dispatch(savePreviousChapters(currentChapterForSave));
          store.dispatch(saveCurrentChapter(response.data[0]));
          store.dispatch(displayChapterAfterLoad());
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
