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
} from 'src/actions/adventures';

import {
  hideLoader,
} from 'src/actions/utils';

const adventuresMiddleware = (store) => (next) => (action) => {
  const baseURL = 'http://ec2-3-80-166-219.compute-1.amazonaws.com/back';
  switch (action.type) {
    case FETCH_ADVENTURES_HOME:
      console.log(`${baseURL}/api/v0/stories?last=3`);
      // API request for the last three adventures
      // http://maxence-royer.vpnuser.lan:8000/api/v0/stories?last=3
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
      // http://maxence-royer.vpnuser.lan:8000/api/v0/stories
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
      // http://maxence-royer.vpnuser.lan:8000/api/v0/stories
      axios.get(`${baseURL}/api/v0/stories/${action.slug}`)
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

    default:
      next(action);
  }
};
export default adventuresMiddleware;
