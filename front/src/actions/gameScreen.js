// actions for the gamescreen

export const DO_SOMETHING = 'DO_SOMETHING';
export const TOGGLE_BUTTON_VISIBILITY = 'TOGGLE_BUTTON_VISIBILITY';
export const FETCH_CURRENT_STORY = 'FETCH_CURRENT_STORY';
export const SAVE_CURRENT_STORY = 'SAVE_CURRENT_STORY';
export const FETCH_FIRST_CHAPTER = 'FETCH_FIRST_CHAPTER';
export const FETCH_NEXT_CHAPTER = 'FETCH_NEXT_CHAPTER';
export const SAVE_CURRENT_CHAPTER = 'SAVE_CURRENT_CHAPTER';
export const SAVE_PREVIOUS_CHAPTERS = 'SAVE_PREVIOUS_CHAPTERS';
export const TOGGLE_ANSWER_VALUE = 'TOGGLE_ANSWER_VALUE';
export const DISPLAY_CHAPTER_AFTER_LOAD = 'DISPLAY_CHAPTER_AFTER_LOAD';
export const HIDE_CHAPTER = 'HIDE_CHAPTER';
export const UPDATE_ANSWER_FIELD = 'UPDATE_ANSWER_FIELD';
export const BLOCK_FIELD = 'BLOCK_FIELD';
export const CLEAR_GAMESCREEN_INPUT = 'CLEAR_GAMESCREEN_INPUT';
export const DISPLAY_SUCCESS_MESSAGE = 'DISPLAY_SUCCESS_MESSAGE';
export const SET_COUNTER = 'SET_COUNTER';
export const START_THE_COUNTER = 'START_THE_COUNTER';
export const STOP_THE_COUNTER = 'STOP_THE_COUNTER';
export const SAVE_PARTY_TIME = 'SAVE_PARTY_TIME';
export const TOGGLE_WRONG_ANSWER_MESSAGE = 'TOGGLE_WRONG_ANSWER_MESSAGE';
export const APPLY_PENALTY = 'APPLY_PENALTY';
export const GIVE_HINT = 'GIVE_HINT';
export const RESET_INITIAL_STATE = 'RESET_INITIAL_STATE';

// === action creators
export const toggleButtonVisibility = () => ({
  type: TOGGLE_BUTTON_VISIBILITY,
});

// Fetches the story to be played
export const fetchCurrentStory = (slug) => ({
  type: FETCH_CURRENT_STORY,
  slug,
});

// Saves currentStory data to be used
// action is called in component
// action is dispatched in container
// action passes through reducer to save it in state

export const saveCurrentStory = (currentStory) => ({
  type: SAVE_CURRENT_STORY,
  currentStory,
});

// calls firstChapter
// Could be renamed to fetchFirstChapter
export const fetchFirstChapter = (firstChapterId) => ({
  type: FETCH_FIRST_CHAPTER,
  firstChapterId,
});

export const fetchNextChapter = (currentChapterChild) => ({
  type: FETCH_NEXT_CHAPTER,
  currentChapterChild,
});

export const saveCurrentChapter = (currentChapter) => ({
  type: SAVE_CURRENT_CHAPTER,
  currentChapter,
});

export const savePreviousChapters = (currentChapter) => ({
  type: SAVE_PREVIOUS_CHAPTERS,
  currentChapter,
});

export const toggleAnswerValue = () => ({
  type: TOGGLE_ANSWER_VALUE,
});

export const updateAnswerField = (newValue, name) => ({
  type: UPDATE_ANSWER_FIELD,
  newValue,
  name,
});

export const blockField = () => ({
  type: BLOCK_FIELD,
});

export const clearGameScreenInput = () => ({
  type: CLEAR_GAMESCREEN_INPUT,
});

export const displayChapterAfterLoad = () => ({
  type: DISPLAY_CHAPTER_AFTER_LOAD,
});

export const hideChapter = () => ({
  type: HIDE_CHAPTER,
});

export const displaySuccessMessage = () => ({
  type: DISPLAY_SUCCESS_MESSAGE,
});

export const setCounter = (currentTime) => ({
  type: SET_COUNTER,
  currentTime,
});

export const startTheCounter = () => ({
  type: START_THE_COUNTER,
});

export const stopTheCounter = () => ({
  type: STOP_THE_COUNTER,
});

export const savePartyTime = (endTime, player, forStory) => ({
  type: SAVE_PARTY_TIME,
  endTime,
  player,
  forStory,
});

export const toggleWrongAnswerMessage = () => ({
  type: TOGGLE_WRONG_ANSWER_MESSAGE,
});

export const applyPenalty = (penaltyTime) => ({
  type: APPLY_PENALTY,
  penaltyTime,
});

export const giveHint = (randomHint) => ({
  type: GIVE_HINT,
  randomHint,
});

export const resetInitialState = (initialState) => ({
  type: RESET_INITIAL_STATE,
  initialState,
});
