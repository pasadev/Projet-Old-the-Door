import { combineReducers } from 'redux';
import userReducer from './user';
import burgerMenuReducer from './burgerMenu';
import adventuresReducer from './adventures';
import storyCreationReducer from './storyCreation';

const rootReducer = combineReducers({
  user: userReducer,
  burgerMenu: burgerMenuReducer,
  adventures: adventuresReducer,
  storyCreation: storyCreationReducer,
});

export default rootReducer;
