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
} from 'src/actions/adventures';

import {
  hideLoader,
} from 'src/actions/utils';

const adventuresMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ADVENTURES_HOME:
      // API request for the last three adventures
      // http://maxence-royer.vpnuser.lan:8000/api/v0/stories?last=3
      axios.get('http://maxence-royer.vpnuser.lan:8000/api/v0/stories?last=3')
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
      // http://maxence-royer.vpnuser.lan:8000/api/v0/stories
      axios.get('http://maxence-royer.vpnuser.lan:8000/api/v0/stories')
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
      // http://maxence-royer.vpnuser.lan:8000/api/v0/stories
      axios.get(`http://maxence-royer.vpnuser.lan:8000/api/v0/stories/${action.slug}`)
        .then((response) => {
          // dispatch to save the Adventure selected
          store.dispatch(saveAdventureSelected(response.data[0]));
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
      // http://maxence-royer.vpnuser.lan:8000/api/v0/stories
      axios.get('http://maxence-royer.vpnuser.lan:8000/api/v0/stories/count')
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
      const currentTimer = store.getState().adventures.adventureSelected;
      axios.get(`http://maxence-royer.vpnuser.lan:8000/api/v0/stories/${currentTimer.id}/time`)
        .then((response) => {
        // dispatch to save the Adventure selected
          store.dispatch(saveAdventureTimer(response.data));
          // dispatch to hide the loader
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
export default adventuresMiddleware;
