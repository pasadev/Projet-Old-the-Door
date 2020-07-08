import { TOGGLE_BUTTON_VISIBILITY, SAVE_CURRENT_STORY, SAVE_CURRENT_CHAPTER } from 'src/actions/gameScreen';

const initialState = {
  buttonIsVisible: false,
  currentStory: [],
  currentChapter: [],
  // We have problems showing the information we get.
};

const gameScreen = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_BUTTON_VISIBILITY:

      return {
        ...state,

        buttonIsVisible: !state.buttonIsVisible,
        // I had problems getting this to work
        // But later I found I hadn't imported
        // the gamescreen container in App
        // Which probably fixed this.
      };

    case SAVE_CURRENT_STORY:

      return {
        ...state,

        currentStory: action.currentStory,
      };

    case SAVE_CURRENT_CHAPTER:

      return {
        ...state,

        currentChapter: action.currentStory,
      };

    default: return state;
  }
};

export default gameScreen;
