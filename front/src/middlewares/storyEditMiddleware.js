import axios from 'axios';

import {
  SUBMIT_ADV_EDIT_FORM,
  FETCH_ADV_EDIT_SELECTED,
  saveAdventureEditSelected,
  fetchAdvEditChapters,
  FETCH_ADV_EDIT_CHAPTERS,
  saveAdvEditChapters,
  clearAdvEditChapters,
  FETCH_CHAPTER_EDIT_SELECTED,
  saveChapterEditSelected,
} from 'src/actions/storyEdit';

import {
  hideLoader,
  redirectOn,
} from 'src/actions/utils';

import { baseURL } from 'src/utils';

const storyEditMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ADV_EDIT_SELECTED:
      axios.get(`${baseURL}/api/v0/stories/${action.slug}`)
        .then((response) => {
          // dispatch to save the Adventure to edit selected
          store.dispatch(saveAdventureEditSelected(response.data[0]));
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          store.dispatch(fetchAdvEditChapters());
        });
      next(action);
      break;

    case SUBMIT_ADV_EDIT_FORM:
      axios.put(`${baseURL}/api/v0/stories/${action.id}`, {
        title: action.title,
        synopsis: action.synopsis,
        description: action.description,
        active: 1,
        author: 38,
        // TODO put real author id and active to 0.
      })
        .then((response) => {
          store.dispatch(redirectOn());
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    case FETCH_ADV_EDIT_CHAPTERS: {
      axios.get(`${baseURL}/api/v0/chapters?story_id=${store.getState().storyEdit.id}`)
        .then((response) => {
          store.dispatch(saveAdvEditChapters(response.data[0]));
        })
        .catch((error) => {
          store.dispatch(clearAdvEditChapters());
        })
        .finally(() => {
          store.dispatch(hideLoader());
        });
      next(action);
      break;
    }

    case FETCH_CHAPTER_EDIT_SELECTED: {
      axios.get(`${baseURL}/api/v0/chapters/${action.id}`)
        .then((response) => {
          store.dispatch(saveChapterEditSelected(response.data[0]));
        })
        .catch((error) => {

        })
        .finally(() => {

        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};
export default storyEditMiddleware;
