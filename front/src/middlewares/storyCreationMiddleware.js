import axios from 'axios';

import {
  SUBMIT_STORY_CREATE_FORM,
} from 'src/actions/storyCreation';

const storyCreationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_STORY_CREATE_FORM:

      axios.post('')
        .then((response) => {

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
