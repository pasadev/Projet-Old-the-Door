import axios from 'axios';

import { SUBMIT_STORY_CREATE_FORM } from 'src/actions/storyCreation';

import { redirectOn } from 'src/actions/utils';

import { baseURL } from 'src/utils';

const storyCreationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_STORY_CREATE_FORM:
      axios.post(`${baseURL}/api/v0/stories`, {
        title: action.title,
        synopsis: action.synopsis,
        description: action.description,
        active: 1,
        author: 2,
        // TODO put real author id and active to 0.
      })
        .then(() => {
          store.dispatch(redirectOn());
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    default:
      next(action);
  }
};
export default storyCreationMiddleware;
