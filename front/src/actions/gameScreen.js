// actions for the gamescreen

export const DO_SOMETHING = 'DO_SOMETHING';
export const TOGGLE_BUTTON_VISIBILITY = 'TOGGLE_BUTTON_VISIBILITY';
export const GET_ADVENTURE = 'GET_ADVENTURE';
export const SAVE_ADVENTURE = 'SAVE_ADVENTURE';

// === action creators
export const doSomething = (/* newValue */) => ({
  type: DO_SOMETHING,
  /* value: newValue, */
});

export const toggleButtonVisibility = () => ({
  type: TOGGLE_BUTTON_VISIBILITY,
});

export const getAdventure = () => ({
  type: GET_ADVENTURE,
});

export const saveAdventure = () => ({
  type: SAVE_ADVENTURE,
});
