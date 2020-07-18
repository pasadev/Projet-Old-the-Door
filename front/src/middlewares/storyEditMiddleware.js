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
  SUBMIT_NEW_CHAPTER_FORM,
  SUBMIT_CHAPTER_EDIT_FORM,
  clearChapterEditField,
  clearEditOption,
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
        }).finally(() => {
          // clear the state and fetch to have the new chapter
          store.dispatch(clearChapterEditField());
          store.dispatch(clearEditOption());
        });
      next(action);
      break;

    case SUBMIT_NEW_CHAPTER_FORM: {
      // TODO add chapter parent
      const {
        title,
        content,
        keyword,
        lockword,
        unlockText,
      } = store.getState().chapterEdit;
      const {
        id,
      } = store.getState().storyEdit;
      axios.post(`${baseURL}/api/v0/chapters`, {
        title,
        content,
        keyword,
        lockword,
        unlockText,
        forStory: id,
      })
        .then((response) => {
          store.dispatch(redirectOn());
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          // clear the state and fetch to have the new chapter
          store.dispatch(clearChapterEditField());
          store.dispatch(clearEditOption());
        });
      next(action);
      break;
    }

    case SUBMIT_CHAPTER_EDIT_FORM: {
      // TODO add chapter parent
      const {
        id,
        title,
        content,
        keyword,
        lockword,
        unlockText,
      } = store.getState().chapterEdit;
      const {
        idStory,
      } = store.getState().storyEdit;
      axios.put(`${baseURL}/api/v0/chapters/${id}`, {
        title,
        content,
        keyword,
        lockword,
        unlockText,
        forStory: idStory,
      })
        .then((response) => {
          store.dispatch(redirectOn());
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          // clear the state and fetch to have the new chapter
          store.dispatch(clearChapterEditField());
          store.dispatch(clearEditOption());
        });
      next(action);
      break;
    }

    case FETCH_ADV_EDIT_CHAPTERS: {
      axios.get(`${baseURL}/api/v0/chapters?story_id=${store.getState().storyEdit.idStory}`)
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
