import { createStore, applyMiddleware } from 'redux';
import { sessionService } from 'redux-react-session';
import { composeWithDevTools } from 'redux-devtools-extension';
import userMiddleware from 'src/middlewares/userMiddleware';
import adventuresMiddleware from 'src/middlewares/adventuresMiddleware';
import storyCreationMiddleware from 'src/middlewares/storyCreationMiddleware';
import gameMiddleware from 'src/middlewares/gameMiddleware';
import storyEditMiddleware from 'src/middlewares/storyEditMiddleware';

import reducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    userMiddleware,
    gameMiddleware,
    adventuresMiddleware,
    storyCreationMiddleware,
    storyEditMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);
sessionService.initSessionService(store);
export default store;
