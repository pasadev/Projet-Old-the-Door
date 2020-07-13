import {
  SAVE_CURRENT_STORY,
  SAVE_CURRENT_CHAPTER,
  TOGGLE_ANSWER_VALUE,
  UPDATE_ANSWER_FIELD,

} from 'src/actions/gameScreen';

const initialState = {
  currentStory: {
    id: '',
    title: '',
    synopsis: '',
    firstChapter: '',
    author: {
      id: '',
      username: '',
    },
  },
  currentChapter: {
    id: '',
    title: '',
    content: '',
    keyword: '',
    lockword: '',
    unlockText: '',
    parentChapter: '',
    forStory: '',
  },

  gameKey: '',
  gameLock: '',

  trueAnswer: false,
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

    case UPDATE_ANSWER_FIELD:
      return {
        ...state,

        [action.name]: action.newValue,
      };

    default: return state;

    case TOGGLE_ANSWER_VALUE:
      // return a new state
      return {
        // spread the current state
        ...state,
        // reverse the value of trueAnswer
        trueAnswer: !state.trueAnswer,
      };
  }
};

export default gameScreen;
