import { combineReducers } from 'redux';
import userReducer from './user';
import utilsReducer from './utils';
import adventuresReducer from './adventures';
import gameScreenReducer from './gameScreen';
import storyCreationReducer from './storyCreation';
import storyEditReducer from './storyEdit';
import profilReducer from './profil';
import chapterEditReducer from './chapterEdit';

const rootReducer = combineReducers({
  user: userReducer,
  utils: utilsReducer,
  adventures: adventuresReducer,
  gameScreen: gameScreenReducer,
  storyCreation: storyCreationReducer,
  storyEdit: storyEditReducer,
  profil: profilReducer,
  chapterEdit: chapterEditReducer,
});

export default rootReducer;
