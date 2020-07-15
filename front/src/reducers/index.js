import { combineReducers } from 'redux';
import userReducer from './user';
import utilsReducer from './utils';
import adventuresReducer from './adventures';
import gameScreenReducer from './gameScreen';
import storyCreationReducer from './storyCreation';
import storyEditReducer from './storyEdit';

const rootReducer = combineReducers({
  user: userReducer,
  utils: utilsReducer,
  adventures: adventuresReducer,
  gameScreen: gameScreenReducer,
  storyCreation: storyCreationReducer,
  storyEdit: storyEditReducer,
});

export default rootReducer;
