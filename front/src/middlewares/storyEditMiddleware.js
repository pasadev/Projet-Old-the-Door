import axios from 'axios';

import {
  SUBMIT_ADV_EDIT_FORM,
  FETCH_ADV_EDIT_SELECTED,
  saveAdventureEditSelected,
  fetchAdvEditChapters,
  FETCH_ADV_EDIT_CHAPTERS,
  saveAdvEditChapters,
  clearStoryEdit,
  clearChapterEdit,
  FETCH_CHAPTER_EDIT_SELECTED,
  saveChapterEditSelected,
  SUBMIT_NEW_CHAPTER_FORM,
  SUBMIT_CHAPTER_EDIT_FORM,
  // clearChapterEdit,
  // clearEditOption,
  fetchParentChapterPossibleOptions,
  FETCH_PARENT_CHAPTER_POSSIBLE_OPTIONS,
  saveParentChapterPossibleOptions,
  saveChapterWhitoutParent,
  fetchAdvEditSelected,
} from 'src/actions/storyEdit';

import { saveAdventureSelected } from 'src/actions/adventures';

import {
  hideLoader,
  displayLoader,
  redirectOn,
} from 'src/actions/utils';

import { baseURL } from 'src/utils';

const storyEditMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ADV_EDIT_SELECTED: {
      const { apiToken } = store.getState().user.user;
      axios.get(`${baseURL}/api/v0/stories/${action.slug}`, {
        headers: { 'X-AUTH-TOKEN': apiToken },
      })
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
    }

    case SUBMIT_ADV_EDIT_FORM: {
      const { id, apiToken } = store.getState().user.user;
      const {
        title,
        synopsis,
        description,
        firstChapter,
        idStory,
      } = store.getState().storyEdit;
      axios.put(`${baseURL}/api/v0/stories/${idStory}`, {
        title,
        synopsis,
        description,
        active: 0,
        author: id,
        firstChapter: firstChapter.id,
      },
      {
        headers: { 'X-AUTH-TOKEN': apiToken },
      })
        .then((response) => {
          store.dispatch(saveAdventureSelected(response.data));
        })
        .catch((error) => {
          console.warn(error);
        }).finally(() => {
          // Ready for some stuff
          store.dispatch(redirectOn());
        });
      next(action);
      break;
    }

    case SUBMIT_NEW_CHAPTER_FORM: {
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
      const {
        apiToken,
      } = store.getState().user.user;
      axios.post(`${baseURL}/api/v0/chapters`, {
        title,
        content,
        keyword,
        lockword,
        unlockText,
        forStory: idStory,
        parentChapter: parentChapterChoice,
      },
      {
        headers: { 'X-AUTH-TOKEN': apiToken },
      })
        .then((response) => {
          store.dispatch(clearStoryEdit());
          store.dispatch(clearChapterEdit());
          store.dispatch(fetchAdvEditSelected(response.data.forStory.slug));
          store.dispatch(displayLoader());
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          // Ready for some stuff
        });
      next(action);
      break;
    }

    case SUBMIT_CHAPTER_EDIT_FORM: {
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
      const {
        apiToken,
      } = store.getState().user.user;
      axios.put(`${baseURL}/api/v0/chapters/${id}`, {
        title,
        content,
        keyword,
        lockword,
        unlockText,
        forStory: idStory,
        parentChapter: parentChapterChoice,
      },
      {
        headers: { 'X-AUTH-TOKEN': apiToken },
      })
        .then((response) => {
          store.dispatch(clearStoryEdit());
          store.dispatch(clearChapterEdit());
          store.dispatch(fetchAdvEditSelected(response.data.forStory.slug));
          store.dispatch(displayLoader());
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          // Ready for some stuff
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
          if (response.data[0].parentChapter === null) {
            store.dispatch(saveChapterWhitoutParent(response.data[0]));
          }
          else {
            store.dispatch(saveChapterEditSelected(response.data[0]));
          }
        })
        .catch((error) => {
          console.warn(error);
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
