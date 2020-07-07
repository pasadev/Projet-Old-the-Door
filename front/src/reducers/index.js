import { combineReducers } from 'redux';

import userReducer from './user';
import burgerMenuReducer from './burgerMenu';
import adventuresReducer from './adventures';
import gameReducer from './game';

const rootReducer = combineReducers({
  user: userReducer,
  burgerMenu: burgerMenuReducer,
  adventures: adventuresReducer,
  game: gameReducer,
});

export default rootReducer;
