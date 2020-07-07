import { combineReducers } from 'redux';
import userReducer from './user';
import burgerMenuReducer from './burgerMenu';
import adventuresReducer from './adventures';

const rootReducer = combineReducers({
  user: userReducer,
  burgerMenu: burgerMenuReducer,
  adventures: adventuresReducer,
});

export default rootReducer;
