import { combineReducers } from 'redux';

import userReducer from './user';
import burgerMenuReducer from './burgerMenu';
import adventuresReducer from './adventures';
import gameScreenReducer from './gameScreen';

const rootReducer = combineReducers({
  user: userReducer,
  burgerMenu: burgerMenuReducer,
  adventures: adventuresReducer,
  gameScreen: gameScreenReducer,
});

export default rootReducer;
