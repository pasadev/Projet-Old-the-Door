import axios from 'axios';

import {
  FETCH_ADV_EDIT_SELECTED,
  saveAdventureEditSelected,
} from 'src/actions/adventureEdit';

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

    default:
      next(action);
  }
};
export default storyEditMiddleware;
