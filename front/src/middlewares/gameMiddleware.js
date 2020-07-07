import axios from 'axios';

import {
  GET_ADVENTURE,

  saveAdventure,
} from 'src/actions/gameScreen';

const gameMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case GET_ADVENTURE:

      axios.get(
        // insert route here) TODO
      ).then((response) => {
        store.dispatch(saveAdventure(response.data));
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
