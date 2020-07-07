import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userMiddleware from 'src/middlewares/userMiddleware';

import reducer from 'src/reducers';
import gameMiddleware from '../middlewares/gameMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    userMiddleware,
    gameMiddleware,
    // ... other middlewares
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
