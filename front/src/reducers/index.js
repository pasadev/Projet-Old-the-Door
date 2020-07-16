import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import userReducer from './user';
import utilsReducer from './utils';
import adventuresReducer from './adventures';
import gameScreenReducer from './gameScreen';
import storyCreationReducer from './storyCreation';
import storyEditReducer from './storyEdit';

const reducers = {
  user: userReducer,
  utils: utilsReducer,
  adventures: adventuresReducer,
  gameScreen: gameScreenReducer,
  storyCreation: storyCreationReducer,
  storyEdit: storyEditReducer,
  session: sessionReducer,
};
const reducer = combineReducers(reducers);

// const rootReducer = combineReducers({
//   session: sessionReducer,
//   user: userReducer,
//   utils: utilsReducer,
//   adventures: adventuresReducer,
//   gameScreen: gameScreenReducer,
//   storyCreation: storyCreationReducer,
//   storyEdit: storyEditReducer,
// });

export default reducer;
