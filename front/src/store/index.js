import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userMiddleware from 'src/middlewares/userMiddleware';

import reducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    userMiddleware,
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
