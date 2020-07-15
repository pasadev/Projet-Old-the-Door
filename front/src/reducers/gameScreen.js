import {
  SAVE_CURRENT_STORY,
  SAVE_CURRENT_CHAPTER,
  TOGGLE_ANSWER_VALUE,
  UPDATE_ANSWER_FIELD,
  SAVE_PREVIOUS_CHAPTERS,
  CLEAR_GAMESCREEN_INPUT,
  DISPLAY_CHAPTER_AFTER_LOAD,
  HIDE_CHAPTER,
  DISPLAY_SUCCESS_MESSAGE,
  SET_COUNTER,
  TOGGLE_THE_COUNTER,
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

  previousChapters: [],

  gameKey: '',
  gameLock: '',

  trueAnswer: false,
  loadingChapter: true,

  showSuccessMessage: false,

  timerCounter: 0,
  timerIsRunning: false,
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

    case SAVE_PREVIOUS_CHAPTERS:
      // le reducer n'accède pas au store
      // eslint-disable-next-line no-case-declarations
      return {
        ...state,

        previousChapters: state.previousChapters.concat(action.currentChapter),
      };

    case UPDATE_ANSWER_FIELD:
      return {
        ...state,

        [action.name]: action.newValue,
      };

    case TOGGLE_ANSWER_VALUE:
      // return a new state
      return {
        // spread the current state
        ...state,
        // reverse the value of trueAnswer
        trueAnswer: !state.trueAnswer,
      };

    case CLEAR_GAMESCREEN_INPUT:
      // return a new state
      return {
        // spread the current state
        ...state,
        // Clear gameKey and gameLock values
        gameKey: '',
        gameLock: '',
      };

    case DISPLAY_CHAPTER_AFTER_LOAD:

      return {
        ...state,

        loadingChapter: false,
      };

    case HIDE_CHAPTER:

      return {
        ...state,

        loadingChapter: true,
      };

    case DISPLAY_SUCCESS_MESSAGE:

      return {
        ...state,

        showSuccessMessage: true,
      };

    case SET_COUNTER:

      return {
        ...state,

        timerCounter: action.currentTime,
      };

    case TOGGLE_THE_COUNTER:

      return {
        ...state,

        timerIsRunning: !state.timerIsRunning,
      };

    default: return state;
  }
};

export default gameScreen;
