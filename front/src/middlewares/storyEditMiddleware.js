import axios from 'axios';

import {
  SUBMIT_ADV_EDIT_FORM,
  FETCH_ADV_EDIT_SELECTED,
  saveAdventureEditSelected,
  fetchAdvEditChapters,
  FETCH_ADV_EDIT_CHAPTERS,
  saveAdvEditChapters,
} from 'src/actions/storyEdit';

import {
  hideLoader,
  redirectOn,
} from 'src/actions/utils';

const storyEditMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ADV_EDIT_SELECTED:
      axios.get(`http://damien-toscano.vpnuser.lan:8000/api/v0/stories/${action.slug}`)
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
      axios.put(`http://damien-toscano.vpnuser.lan:8000/api/v0/stories/${action.id}`, {
        title: action.title,
        synopsis: action.synopsis,
        description: action.description,
        active: 1,
        author: 2,
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
      axios.get(`http://damien-toscano.vpnuser.lan:8000/api/v0/chapters?story_id=${store.getState().storyEdit.id}`)
        .then((response) => {
          console.log(response.data[0]);
          store.dispatch(saveAdvEditChapters(response.data[0]));
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          store.dispatch(hideLoader());
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};
export default storyEditMiddleware;
