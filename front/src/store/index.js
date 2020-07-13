import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userMiddleware from 'src/middlewares/userMiddleware';
import adventuresMiddleware from 'src/middlewares/adventuresMiddleware';
import inscriptionMiddleware from 'src/middlewares/inscriptionMiddleware';
import storyCreationMiddleware from 'src/middlewares/storyCreationMiddleware';
import gameMiddleware from 'src/middlewares/gameMiddleware';

import reducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    userMiddleware,
    gameMiddleware,
    adventuresMiddleware,
    inscriptionMiddleware,
    storyCreationMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
