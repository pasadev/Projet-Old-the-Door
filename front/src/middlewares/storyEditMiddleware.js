import axios from 'axios';

import {
  SUBMIT_ADV_EDIT_FORM,
  FETCH_ADV_EDIT_SELECTED,
  saveAdventureEditSelected,
} from 'src/actions/adventureEdit';

import {
  redirectOn,
} from 'src/actions/storyCreation';

import {
  hideLoader,
} from 'src/actions/utils';

const storyEditMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ADV_EDIT_SELECTED:
      axios.get(`http://damien-toscano.vpnuser.lan:8000/api/v0/stories/${action.slug}`)
        .then((response) => {
          // dispatch to save the Adventure to edit selected
          store.dispatch(saveAdventureEditSelected(response.data[0]));
          store.dispatch(hideLoader());
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    case SUBMIT_ADV_EDIT_FORM:
      axios.post('http://damien-toscano.vpnuser.lan:8000/api/v0/stories', {
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

    default:
      next(action);
  }
};
export default storyEditMiddleware;
