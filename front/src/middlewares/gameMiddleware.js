import axios from 'axios';

import {
  FETCH_CURRENT_STORY,
  saveCurrentStory,
  fetchFirstChapter,
  FETCH_FIRST_CHAPTER,
  saveCurrentChapter,
  FETCH_NEXT_CHAPTER,
  savePreviousChapters,
  startTheCounter,
  displayChapterAfterLoad,
  displaySuccessMessage,
  savePartyTime,
  SAVE_PARTY_TIME,
  stopTheCounter,
} from 'src/actions/gameScreen';

import { hideLoader } from 'src/actions/utils';

import { baseURL } from 'src/utils';

const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CURRENT_STORY: {
      const { apiToken } = store.getState().user.user;
      axios.get(`${baseURL}/api/v0/stories/${action.slug}`, {
        headers: { 'X-AUTH-TOKEN': apiToken },
      })
        .then((response) => {
          store.dispatch(saveCurrentStory(response.data[0]));
          store.dispatch(fetchFirstChapter(response.data[0].firstChapter.id));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }
    case FETCH_FIRST_CHAPTER:
      axios.get(`${baseURL}/api/v0/chapters/${action.firstChapterId}`)
        .then((response) => {
          store.dispatch(saveCurrentChapter(response.data[0]));
          store.dispatch(hideLoader());
          store.dispatch(displayChapterAfterLoad());
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          store.dispatch(startTheCounter());
        });

      next(action);
      break;

    case FETCH_NEXT_CHAPTER:
      // eslint-disable-next-line no-case-declarations
      const currentChapterForSave = store.getState().gameScreen.currentChapter;
      axios.get(`${baseURL}/api/v0/chapters/${currentChapterForSave.id}/child`)
        .then((response) => {
          // Check if it's a 404 or a 200 http code

          if (response.status === 200) {
            store.dispatch(savePreviousChapters(currentChapterForSave));
            store.dispatch(saveCurrentChapter(response.data[0]));
          }
          if (response.status === 204) {
            store.dispatch(stopTheCounter());
            store.dispatch(savePreviousChapters(currentChapterForSave));

            store.dispatch(displaySuccessMessage());
            store.dispatch(savePartyTime(
              store.getState().gameScreen.timerCounter, // end time
              store.getState().user.user.id, // player ID
              store.getState().gameScreen.currentStory.id, // story ID
            ));
          }
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          store.dispatch(displayChapterAfterLoad());
        });

      next(action);
      break;

    case SAVE_PARTY_TIME: {
      const {
        apiToken,
      } = store.getState().user.user;
      axios.post(`${baseURL}/api/v0/parties`, {
        time: action.endTime,
        player: action.player,
        forStory: action.forStory,
      },
      {
        headers: { 'X-AUTH-TOKEN': apiToken },
      })
        .then(() => {
          // congratulations, you just played yourself,
          /* {
              "time": 1665,
              "player": 2,
              "forStory": 12
            } */
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
export default gameMiddleware;
