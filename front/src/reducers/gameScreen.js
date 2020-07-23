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
  TOGGLE_WRONG_ANSWER_MESSAGE,
  APPLY_PENALTY,
  GIVE_HINT,
  BLOCK_FIELD,
  START_THE_COUNTER,
  STOP_THE_COUNTER,
  RESET_INITIAL_STATE,
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

  showWrongAnswerMessage: false,
  showHint: 0,
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

    case BLOCK_FIELD:
      return {
        ...state,
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
        showHint: 0,
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

    case START_THE_COUNTER:
      return {
        ...state,

        timerIsRunning: true,
      };

    case STOP_THE_COUNTER:
      return {
        ...state,

        timerIsRunning: false,
      };

    case TOGGLE_WRONG_ANSWER_MESSAGE:
      return {
        ...state,

        showWrongAnswerMessage: !state.showWrongAnswerMessage,
      };

    case APPLY_PENALTY:
      return {
        ...state,

        timerCounter: state.timerCounter + action.penaltyTime,
      };

    case GIVE_HINT:
      return {
        ...state,

        showHint: action.randomHint,
      };

    case RESET_INITIAL_STATE:
      return {
        ...initialState,

      };

    default: return state;
  }
};

export default gameScreen;
