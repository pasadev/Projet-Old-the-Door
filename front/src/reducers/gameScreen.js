import {
  SAVE_CURRENT_STORY,
  SAVE_CURRENT_CHAPTER,
  TOGGLE_ANSWER_VALUE,

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
