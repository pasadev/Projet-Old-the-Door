import { SAVE_CURRENT_STORY, SAVE_CURRENT_CHAPTER } from 'src/actions/gameScreen';

const initialState = {
  currentStory: [],
  currentChapter: [],
  // We have problems showing the information we get.
};

const gameScreen = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CURRENT_STORY:

      return {
        ...state,

        currentStory: action.currentStory,
      };

    case SAVE_CURRENT_CHAPTER:

      return {
        ...state,

        currentChapter: action.currentChapter,
      };

    default: return state;
  }
};

export default gameScreen;
