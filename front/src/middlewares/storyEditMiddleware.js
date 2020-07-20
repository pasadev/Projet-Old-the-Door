import axios from 'axios';

import {
  SUBMIT_ADV_EDIT_FORM,
  FETCH_ADV_EDIT_SELECTED,
  saveAdventureEditSelected,
  fetchAdvEditChapters,
  FETCH_ADV_EDIT_CHAPTERS,
  saveAdvEditChapters,
  clearStoryEdit,
  FETCH_CHAPTER_EDIT_SELECTED,
  saveChapterEditSelected,
  SUBMIT_NEW_CHAPTER_FORM,
  SUBMIT_CHAPTER_EDIT_FORM,
  // clearChapterEdit,
  // clearEditOption,
  fetchParentChapterPossibleOptions,
  FETCH_PARENT_CHAPTER_POSSIBLE_OPTIONS,
  saveParentChapterPossibleOptions,
} from 'src/actions/storyEdit';

import {
  hideLoader,
  displayLoader,
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
          if (response.data[0].firstChapter !== null) {
            store.dispatch(fetchAdvEditChapters());
          }
        })
        .catch((error) => {
          console.warn(error);
        }).finally(() => {
          store.dispatch(hideLoader());
        });
      next(action);
      break;

    case SUBMIT_ADV_EDIT_FORM: {
      const { id } = store.getState().user.user;
      axios.put(`${baseURL}/api/v0/stories/${action.id}`, {
        title: action.title,
        synopsis: action.synopsis,
        description: action.description,
        active: 0,
        author: id,
        // TODO put real author id and active to 0.
      })
        .then(() => {
          store.dispatch(redirectOn());
        })
        .catch((error) => {
          console.warn(error);
        }).finally(() => {
          // clear the state and fetch to have the new chapter
          // store.dispatch(clearChapterEdit());
          // store.dispatch(clearEditOption());
        });
      next(action);
      break;
    }

    case SUBMIT_NEW_CHAPTER_FORM: {
      // TODO add chapter parent
      const {
        title,
        content,
        keyword,
        lockword,
        unlockText,
        parentChapterChoice,
      } = store.getState().chapterEdit;
      const {
        idStory,
      } = store.getState().storyEdit;
      axios.post(`${baseURL}/api/v0/chapters`, {
        title,
        content,
        keyword,
        lockword,
        unlockText,
        forStory: idStory,
        parentChapter: parentChapterChoice,
      })
        .then(() => {
          store.dispatch(redirectOn());
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          // clear the state and fetch to have the new chapter
          // store.dispatch(clearChapterEdit());
          // store.dispatch(clearEditOption());
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
        parentChapterChoice,
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
        parentChapter: parentChapterChoice,
      })
        .then(() => {
          store.dispatch(redirectOn());
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          // clear the state and fetch to have the new chapter
          // store.dispatch(clearChapterEdit());
          // store.dispatch(clearEditOption());
        });
      next(action);
      break;
    }

    case FETCH_ADV_EDIT_CHAPTERS: {
      const { idStory } = store.getState().storyEdit;
      axios.get(`${baseURL}/api/v0/chapters?story_id=${idStory}`)
        .then((response) => {
          store.dispatch(displayLoader());
          store.dispatch(saveAdvEditChapters(response.data[0]));
          store.dispatch(fetchParentChapterPossibleOptions());
        })
        .catch(() => {
          store.dispatch(clearStoryEdit());
        });
      next(action);
      break;
    }

    case FETCH_PARENT_CHAPTER_POSSIBLE_OPTIONS: {
      const { idStory } = store.getState().storyEdit;
      axios.get(`${baseURL}/api/v0/chapters/?story_id=${idStory}&non_parent=true`)
        .then((response) => {
          store.dispatch(saveParentChapterPossibleOptions(response.data[0]));
        })
        .catch(() => {

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
        .catch(() => {

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
