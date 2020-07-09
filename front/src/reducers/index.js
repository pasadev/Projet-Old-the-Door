import { combineReducers } from 'redux';
import userReducer from './user';
import utilsReducer from './utils';
import adventuresReducer from './adventures';
import storyCreationReducer from './storyCreation';

const rootReducer = combineReducers({
  user: userReducer,
  utils: utilsReducer,
  adventures: adventuresReducer,
  storyCreation: storyCreationReducer,
});

export default rootReducer;
