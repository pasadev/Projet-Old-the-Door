// actions for the gamescreen

export const DO_SOMETHING = 'DO_SOMETHING';
export const TOGGLE_BUTTON_VISIBILITY = 'TOGGLE_BUTTON_VISIBILITY';
export const FETCH_CURRENT_STORY = 'FETCH_CURRENT_STORY';
export const SAVE_CURRENT_STORY = 'SAVE_CURRENT_STORY';
export const FETCH_CURRENT_CHAPTER = 'FETCH_CURRENT_CHAPTER';
export const SAVE_CURRENT_CHAPTER = 'SAVE_CURRENT_CHAPTER';

// === action creators
export const doSomething = (/* newValue */) => ({
  type: DO_SOMETHING,
  /* value: newValue, */
});

export const toggleButtonVisibility = () => ({
  type: TOGGLE_BUTTON_VISIBILITY,
});

// Fetches the story to be played
export const fetchCurrentStory = () => ({
  type: FETCH_CURRENT_STORY,
});

// Saves currentStory data to be used
// action is called in component
// action is dispatched in container
// action passes through reducer to save it in state

export const saveCurrentStory = (currentStory) => ({
  type: SAVE_CURRENT_STORY,
  currentStory,
});

export const fetchCurrentChapter = () => ({
  type: FETCH_CURRENT_CHAPTER,
});

export const saveCurrentChapter = (currentChapter) => ({
  type: SAVE_CURRENT_CHAPTER,
  currentChapter,
});
