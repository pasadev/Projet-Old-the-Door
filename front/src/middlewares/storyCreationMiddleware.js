import axios from 'axios';

import { SUBMIT_STORY_CREATE_FORM, saveStoryCreateSlug } from 'src/actions/storyCreation';

import { redirectOn } from 'src/actions/utils';

import { baseURL } from 'src/utils';

const storyCreationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_STORY_CREATE_FORM: {
      const { id, apiToken } = store.getState().user.user;
      axios.post(`${baseURL}/api/v0/stories`, {
        title: action.title,
        synopsis: action.synopsis,
        description: action.description,
        active: 0,
        author: id,
      },
      {
        headers: { 'X-AUTH-TOKEN': apiToken },
      })
        .then((response) => {
          store.dispatch(saveStoryCreateSlug(response.data.slug));
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          store.dispatch(redirectOn());
        });

      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default storyCreationMiddleware;
