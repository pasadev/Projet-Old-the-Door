import { combineReducers } from 'redux';

import userReducer from './user';
import burgerMenuReducer from './burgerMenu';

const rootReducer = combineReducers({
  user: userReducer,
  burgerMenu: burgerMenuReducer,
});

export default rootReducer;
