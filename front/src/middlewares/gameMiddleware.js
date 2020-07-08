import axios from 'axios';

import {
  FETCH_CURRENT_STORY,

  saveCurrentStory,
} from 'src/actions/gameScreen';

const gameMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_CURRENT_STORY:

      axios.get('http://damien-toscano.vpnuser.lan:8000/api/v0/stories/1')
      // chemin test
        .then((response) => {
          store.dispatch(saveCurrentStory(response.data[0]));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default gameMiddleware;
