import { combineReducers } from 'redux';
import userReducer from './user';
import utilsReducer from './utils';
import adventuresReducer from './adventures';

const rootReducer = combineReducers({
  user: userReducer,
  utils: utilsReducer,
  adventures: adventuresReducer,
});

export default rootReducer;
