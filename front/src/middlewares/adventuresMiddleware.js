import axios from 'axios';

import {
  FETCH_ADVENTURES_HOME,
  saveAdventuresHome,
  FETCH_ADVENTURES_CATALOG,
  saveAdventuresCatalog,
  FETCH_ADVENTURE_SELECTED,
  saveAdventureSelected,
  FETCH_ADVENTURES_ACTIVE_NUMBER,
  saveAdventuresActiveNumber,
  FETCH_ADVENTURE_TIMER,
  saveAdventureTimer,
  fetchAdventureTimer,
  ACTIVATE_STORY,
  DESACTIVATE_STORY,
  DELETE_STORY,
} from 'src/actions/adventures';

import { hideLoader, redirectOn } from 'src/actions/utils';

import { baseURL } from 'src/utils';

const adventuresMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ADVENTURES_HOME:
      // API request for the last three adventures
      axios.get(`${baseURL}/api/v0/stories?last=3`)
        .then((response) => {
          // dispatch to save the Adventures used in Home
          store.dispatch(saveAdventuresHome(response.data[0]));
          // dispatch to hide the loader
          store.dispatch(hideLoader());
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    case FETCH_ADVENTURES_CATALOG:
      // API request for the adventures catalog
      axios.get(`${baseURL}/api/v0/stories`)
        .then((response) => {
          // dispatch to save the Adventures Catalog
          store.dispatch(saveAdventuresCatalog(response.data[0]));
          // dispatch to hide the loader
          store.dispatch(hideLoader());
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    case FETCH_ADVENTURE_SELECTED:
      // API request for the adventures catalog
      axios.get(`${baseURL}/api/v0/stories/${action.slug}`)
        .then((response) => {
          // dispatch to save the Adventure selected
          store.dispatch(saveAdventureSelected(response.data[0]));
          store.dispatch(fetchAdventureTimer(response.data[0].id));
          // dispatch to hide the loader
          store.dispatch(hideLoader());
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    case FETCH_ADVENTURES_ACTIVE_NUMBER:
      // API request for the number of active adventures
      axios.get(`${baseURL}/api/v0/stories/count`)
        .then((response) => {
          // dispatch to save the Adventure selected
          store.dispatch(saveAdventuresActiveNumber(response.data.storyNumber));
          // dispatch to hide the loader
          store.dispatch(hideLoader());
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    case FETCH_ADVENTURE_TIMER:
      // eslint-disable-next-line no-case-declarations
      // const adventureId = store.getState().adventures.adventureSelected;
      axios.get(`${baseURL}/api/v0/stories/${action.adventureId}/time`)
        .then((response) => {
          // If we have data for the time
          if (response.status === 200) {
            // dispatch to save the Adventure selected
            store.dispatch(saveAdventureTimer(response.data));
          }
          // dispatch to hide the loader
          store.dispatch(hideLoader());
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    case ACTIVATE_STORY:
      axios.put(`${baseURL}/api/v0/stories/${store.getState().adventures.adventureSelected.id}/active?set=true`)
        .then((response) => {
          // If we have a valid answer
          if (response.status === 200) {
            // dispatch to save the new data
            store.dispatch(saveAdventureSelected(response.data));
          }
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    case DESACTIVATE_STORY:
      axios.put(`${baseURL}/api/v0/stories/${store.getState().adventures.adventureSelected.id}/active`, {
        set: 'false',
      })
        .then((response) => {
          // If we have a valid answer
          if (response.status === 200) {
            // dispatch to save the new data
            store.dispatch(saveAdventureSelected(response.data));
          }
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    case DELETE_STORY:
      axios.delete(`${baseURL}/api/v0/stories/${store.getState().adventures.adventureSelected.id}`)
        .then((response) => {
          // If we have a valid answer
          if (response.status === 204) {
            // Eventually do something
          }
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
export default adventuresMiddleware;
